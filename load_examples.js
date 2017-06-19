$("#kegg_09_UPGMA").on ("click", function (e) {

    showModal("loading-modal");
    function done(){
      var tree_input = this.responseText;
      var res = d3.layout.newick_parser( tree_input );
      default_tree_settings ();
      tree (res).svg (svg).layout();
    }

    function bioDone() {
      parseBioFile(this.responseText);
    }

    //Load Tree
    var xmlhttp;
    xmlhttp=new XMLHttpRequest();
    xmlhttp.addEventListener("load", done, false);
    xmlhttp.open("GET","/dissertacao/viewer/files/0.9/kegg/upgma.newick",true);
    xmlhttp.send();

    //Load Biological Info
    var xmlhttp2;
    xmlhttp2=new XMLHttpRequest();
    xmlhttp2.addEventListener("load", function () { parseBioFile(this.responseText); }, false);
    xmlhttp2.addEventListener("progress", function (e) {
      if (e.lengthComputable) {
                 var percentComplete = e.loaded / e.total * 100;
                 $("#progress-bar").width(percentComplete + "%");
      }
    }, false);
    xmlhttp2.open("GET","/dissertacao/viewer/files/0.9/kegg/tissueInfo.txt",true);
    xmlhttp2.send();


});


$("#kegg_09_NJ").on ("click", function (e) {

    showModal("loading-modal");
    function done(){
      var tree_input = this.responseText;
      var res = d3.layout.newick_parser( tree_input );
      default_tree_settings ();
      tree (res).svg (svg).layout();
    }

    function biodone() {
      parseBioFile(this.responseText);
    }

    //Load Tree
    var xmlhttp;
    xmlhttp=new XMLHttpRequest();
    xmlhttp.addEventListener("load", done, false);
    xmlhttp.open("GET","/dissertacao/viewer/files/0.9/kegg/neighbor_joining.newick",true);
    xmlhttp.send();

    //Load Biological Info
    var xmlhttp2;
    xmlhttp2=new XMLHttpRequest();
    xmlhttp2.addEventListener("progress", function (e) {
      if (e.lengthComputable) {
                 var percentComplete = e.loaded / e.total * 100;
                 $("#progress-bar").width(percentComplete + "%");
      }
    }, false);
    xmlhttp2.addEventListener("load", function () { parseBioFile(this.responseText); }, false);
    xmlhttp2.open("GET","/dissertacao/viewer/files/0.9/kegg/tissueInfo.txt",true);
    xmlhttp2.send();


});


$("#go_bp_09_UPGMA").on ("click", function (e) {
  showModal("loading-modal");
  function done(){
    var tree_input = this.responseText;
    var res = d3.layout.newick_parser( tree_input );
    default_tree_settings ();
    tree (res).svg (svg).layout();
  }

  function biodone() {
    parseBioFile(this.responseText);
  }

  //Load Tree
  var xmlhttp;
  xmlhttp=new XMLHttpRequest();
  xmlhttp.addEventListener("load", done, false);
  xmlhttp.open("GET","/dissertacao/viewer/files/0.9/bp/upgma.newick",true);
  xmlhttp.send();

  //Load Biological Info
  var xmlhttp2;
  xmlhttp2=new XMLHttpRequest();
  xmlhttp2.addEventListener("load", function () { parseBioFile(this.responseText); }, false);
  xmlhttp2.addEventListener("progress", function (e) {
    if (e.lengthComputable) {
               var percentComplete = e.loaded / e.total * 100;
               $("#progress-bar").width(percentComplete + "%");
    }
  }, false);  xmlhttp2.open("GET","/dissertacao/viewer/files/0.9/bp/tissueInfo.txt",true);
  xmlhttp2.send();
});


$("#go_bp_09_NJ").on ("click", function (e) {
  showModal("loading-modal");
  function done(){
    var tree_input = this.responseText;
    var res = d3.layout.newick_parser( tree_input );
    default_tree_settings ();
    tree (res).svg (svg).layout();
  }

  function biodone() {
    parseBioFile(this.responseText);
  }

  //Load Tree
  var xmlhttp;
  xmlhttp=new XMLHttpRequest();
  xmlhttp.addEventListener("load", done, false);
  xmlhttp.open("GET","/dissertacao/viewer/files/0.9/bp/neighbor_joining.newick",true);
  xmlhttp.send();

  //Load Biological Info
  var xmlhttp2;
  xmlhttp2=new XMLHttpRequest();
  xmlhttp2.addEventListener("load", function () { parseBioFile(this.responseText); }, false);
  xmlhttp2.addEventListener("progress", function (e) {
    if (e.lengthComputable) {
               var percentComplete = e.loaded / e.total * 100;
               $("#progress-bar").width(percentComplete + "%");
    }
  }, false);
  xmlhttp2.open("GET","/dissertacao/viewer/files/0.9/bp/tissueInfo.txt",true);
  xmlhttp2.send();
});


$("#go_cc_09_UPGMA").on ("click", function (e) {
  showModal("loading-modal");
  function done(){
    var tree_input = this.responseText;
    var res = d3.layout.newick_parser( tree_input );
    default_tree_settings ();
    tree (res).svg (svg).layout();
  }

  function biodone() {
    parseBioFile(this.responseText);
  }

  //Load Tree
  var xmlhttp;
  xmlhttp=new XMLHttpRequest();
  xmlhttp.addEventListener("load", done, false);
  xmlhttp.open("GET","/dissertacao/viewer/files/0.9/cc/upgma.newick",true);
  xmlhttp.send();

  //Load Biological Info
  var xmlhttp2;
  xmlhttp2=new XMLHttpRequest();
  xmlhttp2.addEventListener("load", function () { parseBioFile(this.responseText); }, false);
  xmlhttp2.addEventListener("progress", function (e) {
    if (e.lengthComputable) {
               var percentComplete = e.loaded / e.total * 100;
               $("#progress-bar").width(percentComplete + "%");
    }
  }, false);
  xmlhttp2.open("GET","/dissertacao/viewer/files/0.9/cc/tissueInfo.txt",true);
  xmlhttp2.send();
});


$("#go_cc_09_NJ").on ("click", function (e) {
  showModal("loading-modal");
  function done(){
    var tree_input = this.responseText;
    var res = d3.layout.newick_parser( tree_input );
    default_tree_settings ();
    tree (res).svg (svg).layout();
  }

  function biodone() {
    parseBioFile(this.responseText);
  }

  //Load Tree
  var xmlhttp;
  xmlhttp=new XMLHttpRequest();
  xmlhttp.addEventListener("load", done, false);
  xmlhttp.open("GET","/dissertacao/viewer/files/0.9/cc/neighbor_joining.newick",true);
  xmlhttp.send();

  //Load Biological Info
  var xmlhttp2;
  xmlhttp2=new XMLHttpRequest();
  xmlhttp2.addEventListener("load", function () { parseBioFile(this.responseText); }, false);
  xmlhttp2.addEventListener("progress", function (e) {
    if (e.lengthComputable) {
               var percentComplete = e.loaded / e.total * 100;
               $("#progress-bar").width(percentComplete + "%");
    }
  }, false);
  xmlhttp2.open("GET","/dissertacao/viewer/files/0.9/cc/tissueInfo.txt",true);
  xmlhttp2.send();
});


$("#go_mf_09_UPGMA").on ("click", function (e) {
  showModal("loading-modal");
  function done(){
    var tree_input = this.responseText;
    var res = d3.layout.newick_parser( tree_input );
    default_tree_settings ();
    tree (res).svg (svg).layout();
  }

  function biodone() {
    parseBioFile(this.responseText);
  }

  //Load Tree
  var xmlhttp;
  xmlhttp=new XMLHttpRequest();
  xmlhttp.addEventListener("load", done, false);
  xmlhttp.open("GET","/dissertacao/viewer/files/0.9/mf/upgma.newick",true);
  xmlhttp.send();

  //Load Biological Info
  var xmlhttp2;
  xmlhttp2=new XMLHttpRequest();
  xmlhttp2.addEventListener("load", function () { parseBioFile(this.responseText); }, false);
  xmlhttp2.addEventListener("progress", function (e) {
    if (e.lengthComputable) {
               var percentComplete = e.loaded / e.total * 100;
               $("#progress-bar").width(percentComplete + "%");
    }
  }, false);
  xmlhttp2.open("GET","/dissertacao/viewer/files/0.9/mf/tissueInfo.txt",true);
  xmlhttp2.send();
});


$("#go_mf_09_NJ").on ("click", function (e) {
  showModal("loading-modal");
  function done(){
    var tree_input = this.responseText;
    var res = d3.layout.newick_parser( tree_input );
    default_tree_settings ();
    tree (res).svg (svg).layout();
  }

  function biodone() {
    parseBioFile(this.responseText);
  }

  //Load Tree
  var xmlhttp;
  xmlhttp=new XMLHttpRequest();
  xmlhttp.addEventListener("load", done, false);
  xmlhttp.open("GET","/dissertacao/viewer/files/0.9/mf/neighbor_joining.newick",true);
  xmlhttp.send();

  //Load Biological Info
  var xmlhttp2;
  xmlhttp2=new XMLHttpRequest();
  xmlhttp2.addEventListener("load", function () { parseBioFile(this.responseText); }, false);
  xmlhttp2.addEventListener("progress", function (e) {
    if (e.lengthComputable) {
               var percentComplete = e.loaded / e.total * 100;
               $("#progress-bar").width(percentComplete + "%");
    }
  }, false);
  xmlhttp2.open("GET","/dissertacao/viewer/files/0.9/mf/tissueInfo.txt",true);
  xmlhttp2.send();
});


$("#kegg_08_UPGMA").on ("click", function (e) {
  showModal("loading-modal");
  function done(){
    var tree_input = this.responseText;
    var res = d3.layout.newick_parser( tree_input );
    default_tree_settings ();
    tree (res).svg (svg).layout();
  }

  function biodone() {
    parseBioFile(this.responseText);
  }

  //Load Tree
  var xmlhttp;
  xmlhttp=new XMLHttpRequest();
  xmlhttp.addEventListener("load", done, false);
  xmlhttp.open("GET","/dissertacao/viewer/files/0.8/kegg/upgma.newick",true);
  xmlhttp.send();

  //Load Biological Info
  var xmlhttp2;
  xmlhttp2=new XMLHttpRequest();
  xmlhttp2.addEventListener("load", function () { parseBioFile(this.responseText); }, false);
  xmlhttp2.addEventListener("progress", function (e) {
    if (e.lengthComputable) {
               var percentComplete = e.loaded / e.total * 100;
               $("#progress-bar").width(percentComplete + "%");
    }
  }, false);
  xmlhttp2.open("GET","/dissertacao/viewer/files/0.8/kegg/tissueInfo.txt",true);
  xmlhttp2.send();
});


$("#kegg_08_NJ").on ("click", function (e) {
  showModal("loading-modal");
  function done(){
    var tree_input = this.responseText;
    var res = d3.layout.newick_parser( tree_input );
    default_tree_settings ();
    tree (res).svg (svg).layout();
  }

  function biodone() {
    parseBioFile(this.responseText);
  }

  //Load Tree
  var xmlhttp;
  xmlhttp=new XMLHttpRequest();
  xmlhttp.addEventListener("load", done, false);
  xmlhttp.open("GET","/dissertacao/viewer/files/0.8/kegg/neighbor_joining.newick",true);
  xmlhttp.send();

  //Load Biological Info
  var xmlhttp2;
  xmlhttp2=new XMLHttpRequest();
  xmlhttp2.addEventListener("load", function () { parseBioFile(this.responseText); }, false);
  xmlhttp2.addEventListener("progress", function (e) {
    if (e.lengthComputable) {
               var percentComplete = e.loaded / e.total * 100;
               $("#progress-bar").width(percentComplete + "%");
    }
  }, false);
  xmlhttp2.open("GET","/dissertacao/viewer/files/0.8/kegg/tissueInfo.txt",true);
  xmlhttp2.send();
});


$("#go_cc_08_UPGMA").on ("click", function (e) {
  showModal("loading-modal");
  function done(){
    var tree_input = this.responseText;
    var res = d3.layout.newick_parser( tree_input );
    default_tree_settings ();
    tree (res).svg (svg).layout();
  }

  function biodone() {
    parseBioFile(this.responseText);
  }

  //Load Tree
  var xmlhttp;
  xmlhttp=new XMLHttpRequest();
  xmlhttp.addEventListener("load", done, false);
  xmlhttp.open("GET","/dissertacao/viewer/files/0.8/cc/upgma.newick",true);
  xmlhttp.send();

  //Load Biological Info
  var xmlhttp2;
  xmlhttp2=new XMLHttpRequest();
  xmlhttp2.addEventListener("load", function () { parseBioFile(this.responseText); }, false);
  xmlhttp2.addEventListener("progress", function (e) {
    if (e.lengthComputable) {
               var percentComplete = e.loaded / e.total * 100;
               $("#progress-bar").width(percentComplete + "%");
    }
  }, false);
  xmlhttp2.open("GET","/dissertacao/viewer/files/0.8/cc/tissueInfo.txt",true);
  xmlhttp2.send();
});


$("#go_cc_08_NJ").on ("click", function (e) {
  showModal("loading-modal");
  function done(){
    var tree_input = this.responseText;
    var res = d3.layout.newick_parser( tree_input );
    default_tree_settings ();
    tree (res).svg (svg).layout();
  }

  function biodone() {
    parseBioFile(this.responseText);
  }

  //Load Tree
  var xmlhttp;
  xmlhttp=new XMLHttpRequest();
  xmlhttp.addEventListener("load", done, false);
  xmlhttp.open("GET","/dissertacao/viewer/files/0.8/cc/neighbor_joining.newick",true);
  xmlhttp.send();

  //Load Biological Info
  var xmlhttp2;
  xmlhttp2=new XMLHttpRequest();
  xmlhttp2.addEventListener("load", function () { parseBioFile(this.responseText); }, false);
  xmlhttp2.addEventListener("progress", function (e) {
    if (e.lengthComputable) {
               var percentComplete = e.loaded / e.total * 100;
               $("#progress-bar").width(percentComplete + "%");
    }
  }, false);
  xmlhttp2.open("GET","/dissertacao/viewer/files/0.8/cc/tissueInfo.txt",true);
  xmlhttp2.send();
});


$("#go_mf_08_UPGMA").on ("click", function (e) {
  showModal("loading-modal");
  function done(){
    var tree_input = this.responseText;
    var res = d3.layout.newick_parser( tree_input );
    default_tree_settings ();
    tree (res).svg (svg).layout();
  }

  function biodone() {
    parseBioFile(this.responseText);
  }

  //Load Tree
  var xmlhttp;
  xmlhttp=new XMLHttpRequest();
  xmlhttp.addEventListener("load", done, false);
  xmlhttp.open("GET","/dissertacao/viewer/files/0.8/mf/upgma.newick",true);
  xmlhttp.send();

  //Load Biological Info
  var xmlhttp2;
  xmlhttp2=new XMLHttpRequest();
  xmlhttp2.addEventListener("load", function () { parseBioFile(this.responseText); }, false);
  xmlhttp2.addEventListener("progress", function (e) {
    if (e.lengthComputable) {
               var percentComplete = e.loaded / e.total * 100;
               $("#progress-bar").width(percentComplete + "%");
    }
  }, false);
  xmlhttp2.open("GET","/dissertacao/viewer/files/0.8/mf/tissueInfo.txt",true);
  xmlhttp2.send();
});


$("#go_mf_08_NJ").on ("click", function (e) {
  showModal("loading-modal");
  function done(){
    var tree_input = this.responseText;
    var res = d3.layout.newick_parser( tree_input );
    default_tree_settings ();
    tree (res).svg (svg).layout();
  }

  function biodone() {
    parseBioFile(this.responseText);
  }
  //Load Tree
  var xmlhttp;
  xmlhttp=new XMLHttpRequest();
  xmlhttp.addEventListener("load", done, false);
  xmlhttp.open("GET","/dissertacao/viewer/files/0.8/mf/neighbor_joining.newick",true);
  xmlhttp.send();

  //Load Biological Info
  var xmlhttp2;
  xmlhttp2=new XMLHttpRequest();
  xmlhttp2.addEventListener("load", function () { parseBioFile(this.responseText); }, false);
  xmlhttp2.addEventListener("progress", function (e) {
    if (e.lengthComputable) {
               var percentComplete = e.loaded / e.total * 100;
               $("#progress-bar").width(percentComplete + "%");
    }
  }, false);
  xmlhttp2.open("GET","/dissertacao/viewer/files/0.8/mf/tissueInfo.txt",true);
  xmlhttp2.send();
});


$("#go_bp_08_UPGMA").on ("click", function (e) {
  showModal("loading-modal");
  function done(){
    var tree_input = this.responseText;
    var res = d3.layout.newick_parser( tree_input );
    default_tree_settings ();
    tree (res).svg (svg).layout();
  }

  function biodone() {
    parseBioFile(this.responseText);
  }

  //Load Tree
  var xmlhttp;
  xmlhttp=new XMLHttpRequest();
  xmlhttp.addEventListener("load", done, false);
  xmlhttp.open("GET","/dissertacao/viewer/files/0.8/bp/upgma.newick",true);
  xmlhttp.send();

  //Load Biological Info
  var xmlhttp2;
  xmlhttp2=new XMLHttpRequest();
  xmlhttp2.addEventListener("load", function () { parseBioFile(this.responseText); }, false);
  xmlhttp2.addEventListener("progress", function (e) {
    if (e.lengthComputable) {
               var percentComplete = e.loaded / e.total * 100;
               $("#progress-bar").width(percentComplete + "%");
    }
  }, false);
  xmlhttp2.open("GET","/dissertacao/viewer/files/0.8/bp/tissueInfo.txt",true);
  xmlhttp2.send();
});


$("#go_bp_08_NJ").on ("click", function (e) {
  showModal("loading-modal");
  function done(){
    var tree_input = this.responseText;
    var res = d3.layout.newick_parser( tree_input );
    default_tree_settings ();
    tree (res).svg (svg).layout();
  }

  function biodone() {
    parseBioFile(this.responseText);
  }

  //Load Tree
  var xmlhttp;
  xmlhttp=new XMLHttpRequest();
  xmlhttp.addEventListener("load", done, false);
  xmlhttp.open("GET","/dissertacao/viewer/files/0.8/bp/neighbor_joining.newick",true);
  xmlhttp.send();

  //Load Biological Info
  var xmlhttp2;
  xmlhttp2=new XMLHttpRequest();
  xmlhttp2.addEventListener("load", function () { parseBioFile(this.responseText); }, false);
  xmlhttp2.addEventListener("progress", function (e) {
    if (e.lengthComputable) {
               var percentComplete = e.loaded / e.total * 100;
               $("#progress-bar").width(percentComplete + "%");
    }
  }, false);
  xmlhttp2.open("GET","/dissertacao/viewer/files/0.8/bp/tissueInfo.txt",true);
  xmlhttp2.send();
});
