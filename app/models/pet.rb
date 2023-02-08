class Pet < ApplicationRecord
    belongs_to :person,
    
    validates :name, presence: true
    validates :animal, presence: true
end
