class Moment < ApplicationRecord
    has_many :comments, through: :person
    has_many :person_moments
    has_many :persons, through: :person_moments
end
