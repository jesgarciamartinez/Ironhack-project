class TracksController < ApplicationController
    #before_action :authenticate_user!
    #skip_before_action :verify_authenticity_token, only: [:create]
    # extension stopped working, had to remove authentication check and hard-code user_id = 1 in create, update
    def create
        params['track'][:user_id] = 1
        @track = Track.new(track_params)
          if @track.save
            params[:tags].each do |tag|
            @track.tags << Tag.find_or_create_by(name: tag)
            # Tag.new(tag_params)

            end
            render json: @track.to_json

          else
            format.html { render :index }
          end
        end

    def destroy
        @track = Track.find(params[:id])
        @track.destroy
        respond_to do |format|
            format.html { redirect_to :back, notice: 'Track destroyed.' }
        end
    end

    def update

      params['track'][:user_id] = 1
      @track = Track.find(params[:id])
      respond_to do |format|
        if @track.update(track_params)
          format.html { redirect_to root_path, notice: 'Track updated.' }
        else
          format.html { render :index }
        end
      end
    end

    def track_params
      params.require(:track).permit(:artist, :title, :url, :user_id)
    end

    def tag_params
      params.require(:tag).permit(:name)
    end
end
