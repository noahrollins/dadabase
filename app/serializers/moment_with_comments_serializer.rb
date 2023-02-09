class MomentWithCommentsSerializer < ActiveModel::Serializer
    attributes :id, :description, :image_url
    has_many :comments, through: :person
  end
  