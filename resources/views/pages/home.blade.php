@extends('layouts.master')



@section('content')

<div class="container">

    <!-- Marketing Icons Section -->

    <div class="row">

        <div class="col-lg-12">

            <h1 class="page-header">

                Upload Photos In These Categories

            </h1>

        </div>

        @foreach($categories as $category)

            <div class="col-md-6">

                <div class="panel panel-default">

                    <div class="panel-heading">

                        <h4><i class="fa fa-fw {{$category->category_image}}"></i>  {{$category->category_name}}</h4>

                    </div>

                    <div class="panel-body">

                        <p>{{$category->category_description}}</p>

                        <p align="center"><a href="#" data-category-id="{{$category->id}}"  class="btn btn-default upload_photo">Upload Photo</a></p>

                    </div>

                </div>

            </div>

        @endforeach

    </div>

    <!-- /.row -->

    <hr>

</div>

@endsection