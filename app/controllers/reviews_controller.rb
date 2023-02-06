class ReviewsController < ApplicationController

    def show
        render json: review, include: [], serializer:  , status: 200
    end

    def create
        new_review = Review.create!(review_params)
        if new_review.valid?
            render json: new_review, status: :created
        else 
            render json: {error: new_review.errors.full_messages}, status: 422
        end
    end

    def update
        if review
            review.update(review_params)
            render json: review
        else
            render json: { error: "User not found" }, status: :not_found
        end
    end

    def destroy
        review.destroy
        head :no_content
    end

    private

    def review
        Review.find(params[:id])
    end

    def re_params
        params.permit(:content)
    end
end
