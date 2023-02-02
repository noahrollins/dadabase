class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.references :reviewer, foreign_key: { to_table: :people }
      t.references :reviewed, foreign_key: { to_table: :people }

      t.timestamps
    end
  end
end