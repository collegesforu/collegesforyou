@extends('../layouts.main')
@section('contents')
    <div class="ifg-content">
        <div class="loading hide"></div>
        <div class="showVisual js-masonry hide" id="container-msnry"
            data-masonry-options='{ "columnWidth": 250, "itemSelector": ".block-visual" }' style="margin-top: 15px;">
            <?php
            foreach($institutes as $inst){
            ?>
            <div class="block-visual">
                <div class="content-image">
                    <a href="#">
                        <img width="240px" src="{{ URL::to('/') . '/' }}images/<?php echo $inst->id?>-<?php echo $inst->image_file_name; ?>"/>
                    </a>
                </div>
                <div class="content-block">
                    <div class="content-left">
                        <div class="visual-name">
                            <a href="#">empty</a>
                        </div>
                    </div>
                    <div class="content-right">
                        <div class="visual-share">
                            <a dataid="1" datatype="pub" datashare="1" class="share" href="#">
                                <img src="http://www.easel.ly/template/img/link-icon.png"/>
                                <span>READ MORE</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <?php
            }
            ?>
        </div>
    </div>
@stop()