class ChangeAssociationsForCommentsMomentsPerson < ActiveRecord::Migration[7.0]
  def change
    change_table :comments do |t|
      t.references :person, foreign_key: true
    end

    create_table :person_moments do |t|
      t.references :person, foreign_key: true
      t.references :moment, foreign_key: true
    end
  end
end