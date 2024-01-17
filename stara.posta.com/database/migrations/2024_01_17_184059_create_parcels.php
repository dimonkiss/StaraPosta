<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create("parcels", function(Blueprint $table){
            $table->id();
            $table->string("number");
            $table->unsignedBigInteger('category_id'); // Foreign key
            $table->text('description')->nullable();
            $table->unsignedBigInteger('sender_id'); // Foreign key
            $table->unsignedBigInteger('receiver_id'); // Foreign key
            $table->timestamps();

            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->foreign('sender_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('receiver_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("parcels");
    }
};
