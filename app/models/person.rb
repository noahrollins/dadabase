class Person < ApplicationRecord
    has_secure_password
    has_many :kid_dads

    has_many :kid_dads_as_dad, foreign_key: :dad_id, class_name: 'KidDad'
    has_many :kids, through: :kid_dads_as_dad, source: :kid
  
    has_many :kid_dads_as_kid, foreign_key: :kid_id, class_name: 'KidDad'
    has_many :dads, through: :kid_dads_as_kid, source: :dad

    has_many :favorites
    has_many :pets
    has_many :person_moments
    has_many :moments, through: :person_moments
    has_many :comments
    has_many :reviews, foreign_key: :reviewer_id
    has_many :reviewed_by, through: :reviews, source: :reviewer

    validates :name, presence: true
  end