function setup() {
  canvas=createCanvas(600,600)

  //white pieces

  white_pawn_h2=createSprite(555,480)
  white_pawn_h2.addImage(white_pawn_img)
  white_pawn_h2.scale=0.8

  white_pawn_g2=createSprite(480,480)
  white_pawn_g2.addImage(white_pawn_img)
  white_pawn_g2.scale=0.8

  white_pawn_f2=createSprite(405,480)
  white_pawn_f2.addImage(white_pawn_img)
  white_pawn_f2.scale=0.8

  white_pawn_e2=createSprite(330,480)
  white_pawn_e2.addImage(white_pawn_img)
  white_pawn_e2.scale=0.8

  white_pawn_d2=createSprite(255,480)
  white_pawn_d2.addImage(white_pawn_img)
  white_pawn_d2.scale=0.8

  white_pawn_c2=createSprite(180,480)
  white_pawn_c2.addImage(white_pawn_img)
  white_pawn_c2.scale=0.8

  white_pawn_b2=createSprite(105,480)
  white_pawn_b2.addImage(white_pawn_img)
  white_pawn_b2.scale=0.8
  
  white_pawn_a2=createSprite(30,480)
  white_pawn_a2.addImage(white_pawn_img)
  white_pawn_a2.scale=0.8

  white_rook_a1=createSprite(30,560)
  white_rook_a1.addImage(white_rook_img)
  white_rook_a1.scale=0.8

  white_rook_h1=createSprite(560,560)
  white_rook_h1.addImage(white_rook_img)
  white_rook_h1.scale=0.8


//black pcs
  black_pawn_h7=createSprite(555,120)
  black_pawn_h7.addImage(black_pawn_img)
  black_pawn_h7.scale=0.8

  black_pawn_g7=createSprite(480,120)
  black_pawn_g7.addImage(black_pawn_img)
  black_pawn_g7.scale=0.8

  black_pawn_f7=createSprite(405,120)
  black_pawn_f7.addImage(black_pawn_img)
  black_pawn_f7.scale=0.8

  black_pawn_e7=createSprite(330,120)
  black_pawn_e7.addImage(black_pawn_img)
  black_pawn_e7.scale=0.8

  black_pawn_d7=createSprite(255,120)
  black_pawn_d7.addImage(black_pawn_img)
  black_pawn_d7.scale=0.8

  black_pawn_c7=createSprite(180,120)
  black_pawn_c7.addImage(black_pawn_img)
  black_pawn_c7.scale=0.8

  black_pawn_b7=createSprite(105,120)
  black_pawn_b7.addImage(black_pawn_img)
  black_pawn_b7.scale=0.8
  
  black_pawn_a7=createSprite(30,120)
  black_pawn_a7.addImage(black_pawn_img)
  black_pawn_a7.scale=0.8


      //row1
   

      a1=createSprite(37,560)
      a1.addImage(green_square_img)
      a1.scale=0.06
      a1.visible=false
          
      b1=createSprite(112,560)
      b1.addImage(green_square_img)
      b1.scale=0.06
      b1.visible=false
      
      c1=createSprite(187,560)
      c1.addImage(green_square_img)
      c1.scale=0.06
      c1.visible=false
       
      d1=createSprite(260,560)
      d1.addImage(green_square_img)
      d1.scale=0.06
      d1.visible=false
         
      e1=createSprite(335,560)
      e1.addImage(green_square_img)
      e1.scale=0.06
      e1.visible=false
       
      f1=createSprite(410,560)
      f1.addImage(green_square_img)
      f1.scale=0.06
      f1.visible=false
       
      g1=createSprite(485,560)
      g1.addImage(green_square_img)
      g1.scale=0.06
      g1.visible=false
       
      h1=createSprite(560,560)
      h1.addImage(green_square_img)
      h1.scale=0.06
      h1.visible=false

  //row2

   a2=createSprite(37,485)
    a2.addImage(green_square_img)
    a2.scale=0.06
    a2.visible=false

  b2=createSprite(112,485)
  b2.addImage(green_square_img)
  b2.scale=0.06
  b2.visible=false

 
  c2=createSprite(187,485)
  c2.addImage(green_square_img)
  c2.scale=0.06
  c2.visible=false

 d2=createSprite(260,485)
 d2.addImage(green_square_img)
 d2.scale=0.06
 d2.visible=false

  e2=createSprite(335,485)
  e2.addImage(green_square_img)
  e2.scale=0.06
  e2.visible=false


  f2=createSprite(410,485)
  f2.addImage(green_square_img)
  f2.scale=0.06
  f2.visible=false


  g2=createSprite(485,485)
  g2.addImage(green_square_img)
  g2.scale=0.06
  g2.visible=false

  h2=createSprite(560,485)
  h2.addImage(green_square_img)
  h2.scale=0.06
  h2.visible=false


  //row3
   
   a3=createSprite(37,410)
   a3.addImage(green_square_img)
   a3.scale=0.06
   a3.visible=false
   
    b3=createSprite(112,410)
    b3.addImage(green_square_img)
    b3.scale=0.06
    b3.visible=false

    c3=createSprite(187,410)
    c3.addImage(green_square_img)
    c3.scale=0.06
    c3.visible=false

    d3=createSprite(260,410)
   d3.addImage(green_square_img)
   d3.scale=0.06
   d3.visible=false
  
    e3=createSprite(335,410)
    e3.addImage(green_square_img)
    e3.scale=0.06
    e3.visible=false
  
    f3=createSprite(410,410)
    f3.addImage(green_square_img)
    f3.scale=0.06
    f3.visible=false

    g3=createSprite(485,410)
    g3.addImage(green_square_img)
    g3.scale=0.06
    g3.visible=false

    h3=createSprite(560,410)
    h3.addImage(green_square_img)
    h3.scale=0.06
    h3.visible=false

    //row 4

    a4=createSprite(37,335)
    a4.addImage(green_square_img)
    a4.scale=0.06
    a4.visible=false
  
    b4=createSprite(112,335)
    b4.addImage(green_square_img)
    b4.scale=0.06
    b4.visible=false
  
    c4=createSprite(187,335)
    c4.addImage(green_square_img)
    c4.scale=0.06
    c4.visible=false
  
    d4=createSprite(260,335)
    d4.addImage(green_square_img)
    d4.scale=0.06
    d4.visible=false
  
    e4=createSprite(335,335)
    e4.addImage(green_square_img)
    e4.scale=0.06
    e4.visible=false
  
    f4=createSprite(410,335)
    f4.addImage(green_square_img)
    f4.scale=0.06
    f4.visible=false
  
    g4=createSprite(485,335)
    g4.addImage(green_square_img)
    g4.scale=0.06
    g4.visible=false
  
    h4=createSprite(560,335)
    h4.addImage(green_square_img)
    h4.scale=0.06
    h4.visible=false

    //row5
   

    a5=createSprite(37,260)
    a5.addImage(green_square_img)
    a5.scale=0.06
    a5.visible=false
        
    b5=createSprite(112,260)
    b5.addImage(green_square_img)
    b5.scale=0.06
    b5.visible=false
     
    c5=createSprite(187,260)
    c5.addImage(green_square_img)
    c5.scale=0.06
    c5.visible=false
     
    d5=createSprite(260,260)
    d5.addImage(green_square_img)
    d5.scale=0.06
    d5.visible=false
       
    e5=createSprite(335,260)
    e5.addImage(green_square_img)
    e5.scale=0.06
    e5.visible=false
       
    f5=createSprite(410,260)
    f5.addImage(green_square_img)
    f5.scale=0.06
    f5.visible=false
     
    g5=createSprite(485,260)
    g5.addImage(green_square_img)
    g5.scale=0.06
    g5.visible=false
     
    h5=createSprite(560,260)
    h5.addImage(green_square_img)
    h5.scale=0.06
    h5.visible=false
  
   //row6
   

      a6=createSprite(37,185)
      a6.addImage(green_square_img)
      a6.scale=0.06
      a6.visible=false
          
      b6=createSprite(112,185)
      b6.addImage(green_square_img)
      b6.scale=0.06
      b6.visible=false
       
      c6=createSprite(187,185)
      c6.addImage(green_square_img)
      c6.scale=0.06
      c6.visible=false
       
      d6=createSprite(260,185)
      d6.addImage(green_square_img)
      d6.scale=0.06
      d6.visible=false
         
      e6=createSprite(335,185)
      e6.addImage(green_square_img)
      e6.scale=0.06
      e6.visible=false
         
      f6=createSprite(410,185)
      f6.addImage(green_square_img)
      f6.scale=0.06
      f6.visible=false
       
      g6=createSprite(485,185)
      g6.addImage(green_square_img)
      g6.scale=0.06
      g6.visible=false
       
      h5=createSprite(560,185)
      h5.addImage(green_square_img)
      h5.scale=0.06
      h5.visible=false

      //row7
   

      a7=createSprite(37,110)
      a7.addImage(green_square_img)
      a7.scale=0.06
      a7.visible=false
          
      b7=createSprite(112,110)
      b7.addImage(green_square_img)
      b7.scale=0.06
      b7.visible=false
      
      c7=createSprite(187,110)
      c7.addImage(green_square_img)
      c7.scale=0.06
      c7.visible=false
       
      d7=createSprite(260,110)
      d7.addImage(green_square_img)
      d7.scale=0.06
      d7.visible=false
         
      e7=createSprite(335,110)
      e7.addImage(green_square_img)
      e7.scale=0.06
      e7.visible=false
       
      f7=createSprite(410,110)
      f7.addImage(green_square_img)
      f7.scale=0.06
      f7.visible=false
       
      g7=createSprite(485,110)
      g7.addImage(green_square_img)
      g7.scale=0.06
      g7.visible=false
       
      h7=createSprite(560,110)
      h7.addImage(green_square_img)
      h7.scale=0.06
      h7.visible=false

      //row8
   

      a8=createSprite(37,35)
      a8.addImage(green_square_img)
      a8.scale=0.06
      a8.visible=false
          
      b8=createSprite(112,35)
      b8.addImage(green_square_img)
      b8.scale=0.06
      b8.visible=false
      
      c8=createSprite(187,35)
      c8.addImage(green_square_img)
      c8.scale=0.06
      c8.visible=false
       
      d8=createSprite(260,35)
      d8.addImage(green_square_img)
      d8.scale=0.06
      d8.visible=false
         
      e8=createSprite(335,35)
      e8.addImage(green_square_img)
      e8.scale=0.06
      e8.visible=false
       
      f8=createSprite(410,35)
      f8.addImage(green_square_img)
      f8.scale=0.06
      f8.visible=false
       
      g8=createSprite(485,35)
      g8.addImage(green_square_img)
      g8.scale=0.06
      g8.visible=false
       
      h8=createSprite(560,35)
      h8.addImage(green_square_img)
      h8.scale=0.06
      h8.visible=false
      


//pieces

}


function preload(){
  black_bishop_img= loadImage("chess pieces/black_bishop.png")
  black_king_img= loadImage("chess pieces/black_king.png")
  black_knight_img= loadImage("chess pieces/black_knight.png")
  black_pawn_img= loadImage("chess pieces/black_pawn.png")
  black_rook_img= loadImage("chess pieces/black_rook.png")
  black_queen_img= loadImage("chess pieces/black_queen.png")
  white_king_img= loadImage("chess pieces/white_king.png")
  white_bishop_img= loadImage("chess pieces/white_bishop.png")
  white_knight_img= loadImage("chess pieces/white_knight.png")
  white_pawn_img= loadImage("chess pieces/white_pawn.png")
  white_queen_img= loadImage("chess pieces/white_queen.png")
  white_rook_img= loadImage("chess pieces/white_rook.png")
  ze_chess_board_img= loadImage("chess pieces/ze_chess_board.png")
  green_square_img= loadImage("chess pieces/green_square.png")
}

function draw() {
  background(ze_chess_board_img);  
  drawSprites();
}