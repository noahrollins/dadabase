class CreateMoments < ActiveRecord::Migration[7.0]
  def change
    create_table :moments do |t|
      t.references :dad, null: false, foreign_key: { to_table: :people }
      t.text :content
      t.string :image_url

      t.timestamps
    end
  end
end
