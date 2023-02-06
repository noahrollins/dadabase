class PetsController < ApplicationController


    def create
        new_pet = Pet.create!(pet_params)
        if new_pet.valid?
            render json: new_pet, status: :created
        else 
            render json: {error: new_pet.errors.full_messages}, status: 422
        end
    end

    def update
        if pet
            pet.update(pet_params)
            render json: pet
        else
            render json: { error: "User not found" }, status: :not_found
        end
    end

    def destroy
        pet.destroy
        head :no_content
    end

    private

    def pet
        Pet.find(params[:id])
    end

    def pet_params
        params.permit(:name, :nickname, :date_of_birth, :animal)
    end
end
