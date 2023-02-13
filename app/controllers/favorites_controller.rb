class FavoritesController < ApplicationController

    def update
        if favorite
            favorite.update(favorite_params)
            render json: favorite
        else
            render json: { error: "User not found" }, status: :not_found
        end
    end

    private

    def favorite_params
        params.permit(:sport, :artists, :activities, :subjects)
    end
end
