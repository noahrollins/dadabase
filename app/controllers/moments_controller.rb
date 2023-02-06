class MomentsController < ApplicationController


    def create
        new_moment = Moment.create!(moment_params)
        if new_moment.valid?
            render json: new_moment, status: :created
        else 
            render json: {error: new_moment.errors.full_messages}, status: 422
        end
    end

    def update
        if moment
            moment.update(moment_params)
            render json: moment
        else
            render json: { error: "User not found" }, status: :not_found
        end
    end

    def destroy
        moment.destroy
        head :no_content
    end

    private

    def moment
        Moment.find(params[:id])
    end

    def moment_params
        params.permit(:content, :image_url)
    end
end
