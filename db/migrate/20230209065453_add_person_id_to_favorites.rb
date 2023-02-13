class AddPersonIdToFavorites < ActiveRecord::Migration[7.0]
  def change
    add_column :favorites, :person_id, :integer
    
    Favorite.reset_column_information
    Favorite.all.each do |favorite|
      favorite.update_attribute :person_id, favorite.people_id
    end

    remove_column :favorites, :people_id
  end
end
