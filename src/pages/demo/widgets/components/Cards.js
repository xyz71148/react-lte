import React from 'react';
import "../style.css"

export default () => {
    return (
       <div>
           <h4 className="mb-2 mt-4">Cards</h4>
           <h5 className="mb-2">Abilities</h5>
           <div className="row">
               <div className="col-md-3">
                   <div className="card card-primary collapsed-card">
                       <div className="card-header">
                           <h3 className="card-title">Expandable</h3>
                           <div className="card-tools">
                               <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                   className="fas fa-plus"></i>
                               </button>
                           </div>
                       </div>
                       <div className="card-body">
                           The body of the card
                       </div>
                   </div>
               </div>
               <div className="col-md-3">
                   <div className="card card-success">
                       <div className="card-header">
                           <h3 className="card-title">Collapsable</h3>
                           <div className="card-tools">
                               <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                   className="fas fa-minus"></i>
                               </button>
                           </div>
                       </div>
                       <div className="card-body">
                           The body of the card
                       </div>
                   </div>
               </div>
               <div className="col-md-3">
                   <div className="card card-warning">
                       <div className="card-header">
                           <h3 className="card-title">Removable</h3>
                           <div className="card-tools">
                               <button type="button" className="btn btn-tool" data-card-widget="remove"><i
                                   className="fas fa-times"></i>
                               </button>
                           </div>
                       </div>
                       <div className="card-body">
                           The body of the card
                       </div>
                   </div>
               </div>
               <div className="col-md-3">
                   <div className="card card-danger">
                       <div className="card-header">
                           <h3 className="card-title">Maximizable</h3>
                           <div className="card-tools">
                               <button type="button" className="btn btn-tool" data-card-widget="maximize"><i
                                   className="fas fa-expand"></i>
                               </button>
                           </div>
                       </div>
                       <div className="card-body">
                           The body of the card
                       </div>
                   </div>
               </div>
           </div>
           <div className="row">
               <div className="col-md-3">
                   <div className="card card-primary">
                       <div className="card-header">
                           <h3 className="card-title">Card Refresh</h3>
                           <div className="card-tools">
                               <button type="button" className="btn btn-tool" data-card-widget="card-refresh"
                                       data-source="widgets.html"
                                       data-source-selector="#card-refresh-content"><i className="fas fa-sync-alt"></i>
                               </button>
                           </div>
                       </div>
                       <div className="card-body">
                           The body of the card
                       </div>
                   </div>
                   <div className="d-none" id="card-refresh-content">
                       The body of the card after card refresh
                   </div>
               </div>
               <div className="col-md-3">
                   <div className="card card-success">
                       <div className="card-header">
                           <h3 className="card-title">All together</h3>
                           <div className="card-tools">
                               <button type="button" className="btn btn-tool" data-card-widget="card-refresh"
                                       data-source="widgets.html"
                                       data-source-selector="#card-refresh-content" data-load-on-init="false"><i
                                   className="fas fa-sync-alt"></i></button>
                               <button type="button" className="btn btn-tool" data-card-widget="maximize"><i
                                   className="fas fa-expand"></i>
                               </button>
                               <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                   className="fas fa-minus"></i>
                               </button>
                               <button type="button" className="btn btn-tool" data-card-widget="remove"><i
                                   className="fas fa-times"></i>
                               </button>
                           </div>
                       </div>
                       <div className="card-body">
                           The body of the card
                       </div>
                   </div>
               </div>
               <div className="col-md-3">
                   <div className="card card-warning">
                       <div className="card-header">
                           <h3 className="card-title">Loading state</h3>
                       </div>
                       <div className="card-body">
                           The body of the card
                       </div>

                       <div className="overlay">
                           <i className="fas fa-2x fa-sync-alt"></i>
                       </div>
                   </div>
               </div>
               <div className="col-md-3">
                   <div className="card card-danger">
                       <div className="card-header">
                           <h3 className="card-title">Loading state (dark)</h3>
                       </div>
                       <div className="card-body">
                           The body of the card
                       </div>

                       <div className="overlay dark">
                           <i className="fas fa-2x fa-sync-alt"></i>
                       </div>
                   </div>
               </div>
           </div>
           <h5 className="mb-2">Colors Variations</h5>
           <div className="row">
               <div className="col-md-3">
                   <div className="card card-primary">
                       <div className="card-header">
                           <h3 className="card-title">Primary Outline</h3>
                           <div className="card-tools">
                               <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                   className="fas fa-minus"></i>
                               </button>
                           </div>
                       </div>
                       <div className="card-body">
                           The body of the card
                       </div>
                   </div>
               </div>
               <div className="col-md-3">
                   <div className="card card-success">
                       <div className="card-header">
                           <h3 className="card-title">Success Outline</h3>
                           <div className="card-tools">
                               <button type="button" className="btn btn-tool" data-card-widget="remove"><i
                                   className="fas fa-times"></i>
                               </button>
                           </div>
                       </div>
                       <div className="card-body">
                           The body of the card
                       </div>
                   </div>
               </div>
               <div className="col-md-3">
                   <div className="card card-warning">
                       <div className="card-header">
                           <h3 className="card-title">Warning Outline</h3>
                           <div className="card-tools">
                               <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                   className="fas fa-minus"></i>
                               </button>
                           </div>
                       </div>
                       <div className="card-body">
                           The body of the card
                       </div>
                   </div>
               </div>
               <div className="col-md-3">
                   <div className="card card-danger">
                       <div className="card-header">
                           <h3 className="card-title">Danger Outline</h3>
                       </div>
                       <div className="card-body">
                           The body of the card
                       </div>
                   </div>
               </div>
           </div>
           <div className="row">
               <div className="col-md-3">
                   <div className="card card-outline card-primary">
                       <div className="card-header">
                           <h3 className="card-title">Primary Outline</h3>
                           <div className="card-tools">
                               <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                   className="fas fa-minus"></i>
                               </button>
                           </div>
                       </div>
                       <div className="card-body">
                           The body of the card
                       </div>
                   </div>
               </div>
               <div className="col-md-3">
                   <div className="card card-outline card-success">
                       <div className="card-header">
                           <h3 className="card-title">Success Outline</h3>
                           <div className="card-tools">
                               <button type="button" className="btn btn-tool" data-card-widget="remove"><i
                                   className="fas fa-times"></i>
                               </button>
                           </div>
                       </div>
                       <div className="card-body">
                           The body of the card
                       </div>
                   </div>
               </div>
               <div className="col-md-3">
                   <div className="card card-outline card-warning">
                       <div className="card-header">
                           <h3 className="card-title">Warning Outline</h3>
                           <div className="card-tools">
                               <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                   className="fas fa-minus"></i>
                               </button>
                           </div>
                       </div>
                       <div className="card-body">
                           The body of the card
                       </div>
                   </div>
               </div>
               <div className="col-md-3">
                   <div className="card card-outline card-danger">
                       <div className="card-header">
                           <h3 className="card-title">Danger Outline</h3>
                       </div>
                       <div className="card-body">
                           The body of the card
                       </div>
                   </div>
               </div>
           </div>
           <div className="row">
               <div className="col-md-3">
                   <div className="card bg-primary">
                       <div className="card-header">
                           <h3 className="card-title">Primary</h3>
                           <div className="card-tools">
                               <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                   className="fas fa-minus"></i>
                               </button>
                           </div>
                       </div>
                       <div className="card-body">
                           The body of the card
                       </div>
                   </div>
               </div>
               <div className="col-md-3">
                   <div className="card bg-success">
                       <div className="card-header">
                           <h3 className="card-title">Success</h3>
                           <div className="card-tools">
                               <button type="button" className="btn btn-tool" data-card-widget="remove"><i
                                   className="fas fa-times"></i>
                               </button>
                           </div>
                       </div>
                       <div className="card-body">
                           The body of the card
                       </div>
                   </div>
               </div>
               <div className="col-md-3">
                   <div className="card bg-warning">
                       <div className="card-header">
                           <h3 className="card-title">Warning</h3>
                           <div className="card-tools">
                               <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                   className="fas fa-minus"></i>
                               </button>
                           </div>
                       </div>
                       <div className="card-body">
                           The body of the card
                       </div>
                   </div>
               </div>
               <div className="col-md-3">
                   <div className="card bg-danger">
                       <div className="card-header">
                           <h3 className="card-title">Danger</h3>
                       </div>
                       <div className="card-body">
                           The body of the card
                       </div>
                   </div>
               </div>
           </div>
           <div className="row">
               <div className="col-md-3">
                   <div className="card bg-gradient-primary">
                       <div className="card-header">
                           <h3 className="card-title">Primary Gradient</h3>
                           <div className="card-tools">
                               <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                   className="fas fa-minus"></i>
                               </button>
                           </div>
                       </div>
                       <div className="card-body">
                           The body of the card
                       </div>
                   </div>
               </div>
               <div className="col-md-3">
                   <div className="card bg-gradient-success">
                       <div className="card-header">
                           <h3 className="card-title">Success Gradient</h3>
                           <div className="card-tools">
                               <button type="button" className="btn btn-tool" data-card-widget="remove"><i
                                   className="fas fa-times"></i>
                               </button>
                           </div>
                       </div>
                       <div className="card-body">
                           The body of the card
                       </div>
                   </div>
               </div>
               <div className="col-md-3">
                   <div className="card bg-gradient-warning">
                       <div className="card-header">
                           <h3 className="card-title">Warning Gradient</h3>
                           <div className="card-tools">
                               <button type="button" className="btn btn-tool" data-card-widget="collapse"><i
                                   className="fas fa-minus"></i>
                               </button>
                           </div>
                       </div>
                       <div className="card-body">
                           The body of the card
                       </div>
                   </div>
               </div>
               <div className="col-md-3">
                   <div className="card bg-gradient-danger">
                       <div className="card-header">
                           <h3 className="card-title">Danger Gradient</h3>
                       </div>
                       <div className="card-body">
                           The body of the card
                       </div>
                   </div>
               </div>
           </div>
       </div>
    )
}
