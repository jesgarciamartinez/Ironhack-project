class CreateTagsTracks < ActiveRecord::Migration
  def change
    drop_table :tags_tracks
    create_table :tags_tracks do |t|

      t.timestamps null: false
    end
  end
end
