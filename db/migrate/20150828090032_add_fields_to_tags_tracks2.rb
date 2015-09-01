class AddFieldsToTagsTracks2 < ActiveRecord::Migration
  def change
    add_column :tags_tracks, :track_id, :integer
    add_column :tags_tracks, :tag_id, :integer
  end
end
