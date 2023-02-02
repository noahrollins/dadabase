class CreateKidDads < ActiveRecord::Migration[6.0]
  def change
    create_table :kid_dads do |t|
      t.references :dad, null: false, foreign_key: { to_table: :people }
      t.references :kid, null: false, foreign_key: { to_table: :people }
      t.timestamps
    end
  end
end