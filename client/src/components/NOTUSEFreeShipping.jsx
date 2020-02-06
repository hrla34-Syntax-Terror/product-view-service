
<ul class="KL-carousel__images">
          <li class="KL-carousel__image">
            {/* mark up an image in a document */}
            <figure>
              <img src={this.props.element.imageDog} alt="DOG SOMETHING"/>
            </figure>
          </li>
          <li class="KL-carousel__image">
            <figure>
              <img src={this.props.element.imageDog2} alt="DOG SOMETHING2"/>
            </figure>
          </li>
          <li class="KL-carousel__image">
            <figure>
              <img src={this.props.element.imageDog3} alt="DOG SOMETHING3"/>
            </figure>
          </li>
        </ul>
        <ul class="KL-carousel__thumbnails">
          <li>
            <label for="image-1"> 
              <img
                style={{width: 100, height: 80}}
                src={this.props.element.imageDog}/>
            </label>
          </li>
          <li>
            <label for="image-2"> 
              <img
                style={{width: 100, height: 80}}
                src={this.props.element.imageDog2}/>
            </label>
          </li>
          <li>
            <label for="image-3"> 
              <img
                style={{width: 100, height: 80}}
                src={this.props.element.imageDog3}/>
            </label>
          </li>
        </ul>

<div class="container">
        <div class="carousel">
            <input type="radio" name="slides" checked="checked" id="slide-1">
            <input type="radio" name="slides" id="slide-2">
            <input type="radio" name="slides" id="slide-3">
            <input type="radio" name="slides" id="slide-4">
            <input type="radio" name="slides" id="slide-5">
            <input type="radio" name="slides" id="slide-6">
            <ul class="carousel__slides">
                <li class="carousel__slide">
                    <figure>
                        <div>
                            <img src="https://picsum.photos/id/1041/800/450" alt="">
                        </div>
                        <figcaption>
                            <span class="credit">Photo: Tim Marshall</span>
                        </figcaption>
                    </figure>
                </li>
                <li class="carousel__slide">
                    <figure>
                        <div>
                            <img src="https://picsum.photos/id/1043/800/450" alt="">
                        </div>
                        <figcaption>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span class="credit">Photo: Christian Joudrey</span>                            
                        </figcaption>
                    </figure>
                </li>
                <li class="carousel__slide">
                    <figure>
                        <div>
                            <img src="https://picsum.photos/id/1044/800/450" alt="">
                        </div>
                        <figcaption>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span class="credit">Photo: Steve Carter</span>                            
                        </figcaption>
                    </figure>
                </li>
                <li class="carousel__slide">
                    <figure>
                        <div>
                            <img src="https://picsum.photos/id/1045/800/450" alt="">
                        </div>
                        <figcaption>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span class="credit">Photo: Aleksandra Boguslawska</span>                            
                        </figcaption>
                    </figure>
                </li>
                <li class="carousel__slide">
                    <figure>
                        <div>
                            <img src="https://picsum.photos/id/1049/800/450" alt="">
                        </div>
                        <figcaption>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span class="credit">Photo: Rosan Harmens</span>                            
                        </figcaption>
                    </figure>
                </li>
                <li class="carousel__slide">
                    <figure>
                        <div>
                            <img src="https://picsum.photos/id/1052/800/450" alt="">
                        </div>
                        <figcaption>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span class="credit">Photo: Annie Spratt</span>                            
                        </figcaption>
                    </figure>
                </li>
            </ul>    
            <ul class="carousel__thumbnails">
                <li>
                    <label for="slide-1"><img src="https://picsum.photos/id/1041/150/150" alt=""></label>
                </li>
                <li>
                    <label for="slide-2"><img src="https://picsum.photos/id/1043/150/150" alt=""></label>
                </li>
                <li>
                    <label for="slide-3"><img src="https://picsum.photos/id/1044/150/150" alt=""></label>
                </li>
                <li>
                    <label for="slide-4"><img src="https://picsum.photos/id/1045/150/150" alt=""></label>
                </li>
                <li>
                    <label for="slide-5"><img src="https://picsum.photos/id/1049/150/150" alt=""></label>
                </li>
                <li>
                    <label for="slide-6"><img src="https://picsum.photos/id/1052/150/150" alt=""></label>
                </li>
            </ul>
        </div>
    </div>
</section>