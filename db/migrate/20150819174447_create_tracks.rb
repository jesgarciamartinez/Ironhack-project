class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :artist
      t.string :title
      t.string :url
      t.integer :user_id


      t.timestamps null: false
    end
  end
end
