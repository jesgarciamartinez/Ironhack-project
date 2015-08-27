class TagsTracks < ActiveRecord::Migration
  def change
    create_table :tags_tracks do |t|
      t.belongs_to :track, index: true, foreign_key: true
      t.belongs_to :tag, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
