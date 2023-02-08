class SessionsController < ApplicationController
    def create
        person = Person.find_by(email: params[:email])
    
        if person&.authenticate(params[:password])
        session[:user_id] = person.id
        render json: person, status: :ok
        else
        render json: { error: "Email or password incorrect" }, status: :unauthorized
        end
    end
    
    def logged_in
        if current_user
        render json: current_user
        else
        render json: { error: "Not logged in" }, status: :unauthorized
        end
    end
    
    def destroy
        session[:user_id] = nil
        head :no_content
    end
    
    private
    
    def current_user
        @current_user ||= Person.find_by(id: session[:user_id])
    end
end