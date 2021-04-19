<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateManagePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('manage_posts', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->nullable();
            $table->string('product_name')->nullable();
            $table->integer('total_weight')->nullable();
            $table->string('weight_unit')->nullable();
            $table->integer('price_per_unit')->nullable();
            $table->string('advance_payment')->nullable();
            $table->string('category')->nullable();
            $table->string('sub_category')->nullable();
            $table->string('production_type')->nullable();
            $table->string('product_production_year')->nullable();
            $table->string('packaging_method')->nullable();
            $table->string('initial_delivery_date')->nullable();
            $table->string('final_delivery_date')->nullable();
            $table->string('offer_end_date')->nullable();
            $table->string('own_vehicle')->nullable();
            $table->string('divisions')->nullable();
            $table->string('district')->nullable();
            $table->string('thana')->nullable();
            $table->string('villege')->nullable();
            $table->text('comments')->nullable();
            $table->string('product_image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('manage_posts');
    }
}