class PeopleController < ApplicationController
    def index
        render json: Person.all
    end

    def show
        render json: person, include: [:comments, :dads, :favorites, :kids, :person_moments, :pets, :reviews, :reviewed_by], 
               serializer: [PersonWithCommentssSerializer, PersonWithDadsSerializer, PersonWithFavoritesSerializer, 
                            PersonWithKidsSerializer, PersonWithPersonMomentsSerializer, PersonWithPetsSerializer, 
                            PersonWithReviewsSerializer], 
               status: 200
    end

    def logged_in
        session_user = Person.find_by(id: session[:user_id])
        if session_user
            render json: session_user, include: [], serializer: 
        else
          render json: { errors: 'unauthorized entry'}, status: :unauthorized
        end
      end


    def create
        new_person = Person.create!(person_params)
        if new_person.valid?
            render json: new_person, status: :created
        else 
            render json: {error: new_person.errors.full_messages}, status: 422
        end
    end


    def update
        if person
            person.update(person_params)
            render json: person
        else
            render json: { error: "User not found" }, status: :not_found
        end
    end

    def destroy
        person.destroy
        head :no_content
    end

    private

    def person
        Person.includes(:pets, :favorites, :moments, :comments).find(params[:id])
    end

    def person_params
        params.permit(:name, :nickname, :date_of_birth, :email, :zipcode, :spouse, :password, :password_confirmation)
    end
end
