class CreatePeople < ActiveRecord::Migration[7.0]
  def change
    create_table :people do |t|
      t.string :name
      t.string :nickname
      t.date :date_of_birth
      t.string :email
      t.integer :zipcode
      t.string :spouse

      t.timestamps
    end
  end
end
