class PersonWithReviewsSerializer < ActiveModel::Serializer
    attributes :id, :name, :nickname, :date_of_birth, :email, :zipcode, :spouse
    has_many :reviews, foreign_key: :reviewer_id
    has_many :reviewed_by, through: :reviews, source: :reviewer
  end
  