class PeopleController < ApplicationController
    def index
        render json: Person.all
    end

    def show
        render json: person, 
               serializer: PersonWithAllSerializer,
               status: 200
    end

    def logged_in
        session_user = Person.find_by(id: session[:user_id])
        if session_user
            render json: session_user, include: [:comments, :favorites, :person_moments, :moments, :pets, :reviews, :reviewed_by, :dads, :kids ], serializer: PersonWithAllSerializer
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

    def create_kid
      new_kid = Person.create(kid_params)
      if new_kid.valid?
        KidDad.create(dad_id: current_user.id, kid_id: new_kid.id)
        render json: new_kid, status: :created
      else 
        render json: { error: new_kid.errors.full_messages }, status: :unprocessable_entity
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
        Person.includes(:comments, :favorites, :person_moments, :pets, :reviews).find(params[:id])
    end

    def person_params
      params.permit(:name, :nickname, :date_of_birth, :email, :zipcode, :spouse, :password, :password_confirmation)
    end

    def kid_params
      params.require(:person).permit(:name, :nickname, :date_of_birth, :email, :zipcode, :spouse, :password, :password_confirmation)
    end

    def current_user
      @current_user ||= Person.find_by(id: session[:user_id])
  end
end
