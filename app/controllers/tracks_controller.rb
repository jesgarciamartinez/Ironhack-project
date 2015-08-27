class TracksController < ApplicationController
    #before_action :authenticate_user!
    #skip_before_action :verify_authenticity_token, only: [:create]
    # extension stopped working, had to remove authentication check and hard-code user_id = 1 in create, update
    def create

        params['track'][:user_id] = 1
        @track = Track.new(track_params)


        respond_to do |format|
          if @track.save
            format.html {redirect_to root_path, notice: 'Track was successfully created.' }
          else
            format.html { render :index }
          end
        end
    end

    def destroy
        @track = Track.find(params[:id])
        @track.destroy
        respond_to do |format|
            format.html { redirect_to :back, notice: 'Track was successfully destroyed.' }
        end
    end

    def update

      params['track'][:user_id] = 1
      @track = Track.find(params[:id])
      respond_to do |format|
        if @track.update(track_params)
          format.html { redirect_to root_path, notice: 'Track was successfully updated.' }
        else
          format.html { render :index }
        end
      end
    end

    def track_params
      params.require(:track).permit(:artist, :title, :url, :user_id)
    end
end
