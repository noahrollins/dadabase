class CommentsController < ApplicationController
   
    def create
        comment = Comment.create!(params[:content])
        if comment.valid?
            render json: comment, status: :created
        else 
            render json: {error: comment.errors.full_messages}, status: 422
        end
    end


    def destroy
        comment.destroy
        head :no_content
    end


end
