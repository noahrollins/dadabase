class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.references :people, null: false, foreign_key: true
      t.string :sports
      t.string :artists
      t.string :activities
      t.string :subjects

      t.timestamps
    end
  end
end
