class PatientsController < ApplicationController
  def index
    render json: Patient.all
  end

  def create
    @patient = Patient.new(patient_params)
    if @patient.save
      render json: @patient
    else
      render json: @patient.errors, status: :unprocessable_entity
    end
  end

  private

  def patient_params
    params.require(:patient)
      .permit(:first_name, :last_name, :gender, :age, :address, :service_type, :fee_amount, :free)
  end
end
