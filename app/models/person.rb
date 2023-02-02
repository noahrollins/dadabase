class Person < ApplicationRecord
    has_secure_password
    has_many :kids, foreign_key: :kid_id, class_name: "KidDad"
    has_many :dads, foreign_key: :dad_id, class_name: "KidDad"
    has_many :favorites
    has_many :pets
    has_many :moments
    has_many :comments, through: :moments
    has_many :reviews, foreign_key: :reviewer_id
    has_many :reviewed_by, through: :reviews, source: :reviewer
  end