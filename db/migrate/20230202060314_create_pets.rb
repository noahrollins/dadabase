class CreatePets < ActiveRecord::Migration[7.0]
  def change
    create_table :pets do |t|
      t.references :person, null: false, foreign_key: true
      t.string :name
      t.string :animal
      t.string :image_url
      t.date :date_of_birth

      t.timestamps
    end
  end
end
