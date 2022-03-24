import {createActivityfileattachmentFromDiscriminatorValue} from './createActivityfileattachmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createCanvasappFromDiscriminatorValue} from './createCanvasappFromDiscriminatorValue';
import {createExportsolutionuploadFromDiscriminatorValue} from './createExportsolutionuploadFromDiscriminatorValue';
import {createFlowsessionFromDiscriminatorValue} from './createFlowsessionFromDiscriminatorValue';
import {createMailboxFromDiscriminatorValue} from './createMailboxFromDiscriminatorValue';
import {createMsdyn_aibfileFromDiscriminatorValue} from './createMsdyn_aibfileFromDiscriminatorValue';
import {createMsdyn_aiconfigurationFromDiscriminatorValue} from './createMsdyn_aiconfigurationFromDiscriminatorValue';
import {createMsdyn_bookableresourcebookingquicknoteFromDiscriminatorValue} from './createMsdyn_bookableresourcebookingquicknoteFromDiscriminatorValue';
import {createMsdyn_conversationinsightFromDiscriminatorValue} from './createMsdyn_conversationinsightFromDiscriminatorValue';
import {createMsdyn_customerassetattachmentFromDiscriminatorValue} from './createMsdyn_customerassetattachmentFromDiscriminatorValue';
import {createMsdyn_kbattachmentFromDiscriminatorValue} from './createMsdyn_kbattachmentFromDiscriminatorValue';
import {createMsdyn_knowledgearticleimageFromDiscriminatorValue} from './createMsdyn_knowledgearticleimageFromDiscriminatorValue';
import {createMsdyn_ocrecordingFromDiscriminatorValue} from './createMsdyn_ocrecordingFromDiscriminatorValue';
import {createMsdyn_pminferredtaskFromDiscriminatorValue} from './createMsdyn_pminferredtaskFromDiscriminatorValue';
import {createMsdyn_richtextfileFromDiscriminatorValue} from './createMsdyn_richtextfileFromDiscriminatorValue';
import {createMsdyn_soundfileFromDiscriminatorValue} from './createMsdyn_soundfileFromDiscriminatorValue';
import {createMsdyn_transcriptFromDiscriminatorValue} from './createMsdyn_transcriptFromDiscriminatorValue';
import {createMsfp_fileresponseFromDiscriminatorValue} from './createMsfp_fileresponseFromDiscriminatorValue';
import {createPluginpackageFromDiscriminatorValue} from './createPluginpackageFromDiscriminatorValue';
import {createSolutionFromDiscriminatorValue} from './createSolutionFromDiscriminatorValue';
import {createStagesolutionuploadFromDiscriminatorValue} from './createStagesolutionuploadFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createWebresourceFromDiscriminatorValue} from './createWebresourceFromDiscriminatorValue';
import {createWorkflowbinaryFromDiscriminatorValue} from './createWorkflowbinaryFromDiscriminatorValue';
import {createWorkflowlogFromDiscriminatorValue} from './createWorkflowlogFromDiscriminatorValue';
import {Activityfileattachment, Asyncoperation, Canvasapp, Crmbaseentity, Exportsolutionupload, Flowsession, Mailbox, Msdyn_aibfile, Msdyn_aiconfiguration, Msdyn_bookableresourcebookingquicknote, Msdyn_conversationinsight, Msdyn_customerassetattachment, Msdyn_kbattachment, Msdyn_knowledgearticleimage, Msdyn_ocrecording, Msdyn_pminferredtask, Msdyn_richtextfile, Msdyn_soundfile, Msdyn_transcript, Msfp_fileresponse, Pluginpackage, Solution, Stagesolutionupload, Syncerror, Webresource, Workflowbinary, Workflowlog} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Fileattachment extends Crmbaseentity implements Parsable {
    private __objectid_value?: string | undefined;
    private _createdon?: Date | undefined;
    private _fileAttachment_CanvasApp_BackgroundImage?: Canvasapp[] | undefined;
    private _fileAttachment_CanvasApp_LargeIcon?: Canvasapp[] | undefined;
    private _fileAttachment_CanvasApp_MediumIcon?: Canvasapp[] | undefined;
    private _fileAttachment_CanvasApp_SmallIcon?: Canvasapp[] | undefined;
    private _fileAttachment_CanvasApp_TeamsIcon?: Canvasapp[] | undefined;
    private _fileAttachment_CanvasApp_WideIcon?: Canvasapp[] | undefined;
    private _fileAttachment_pluginpackage_FileId?: Pluginpackage[] | undefined;
    private _fileAttachment_Solution?: Solution | undefined;
    private _fileAttachment_SyncErrors?: Syncerror[] | undefined;
    private _fileAttachment_WebResource_ContentFileRef?: Webresource[] | undefined;
    private _fileAttachment_WebResource_ContentJsonFileRef?: Webresource[] | undefined;
    private _fileattachmentid?: string | undefined;
    private _filename?: string | undefined;
    private _filesizeinbytes?: number | undefined;
    private _mimetype?: string | undefined;
    private _objectid_activityfileattachment?: Activityfileattachment | undefined;
    private _objectid_asyncoperation?: Asyncoperation | undefined;
    private _objectid_canvasapp?: Canvasapp | undefined;
    private _objectid_exportsolutionupload?: Exportsolutionupload | undefined;
    private _objectid_flowsession?: Flowsession | undefined;
    private _objectid_mailbox?: Mailbox | undefined;
    private _objectid_msdyn_aibfile?: Msdyn_aibfile | undefined;
    private _objectid_msdyn_aiconfiguration?: Msdyn_aiconfiguration | undefined;
    private _objectid_msdyn_bookableresourcebookingquicknote?: Msdyn_bookableresourcebookingquicknote | undefined;
    private _objectid_msdyn_conversationinsight?: Msdyn_conversationinsight | undefined;
    private _objectid_msdyn_customerassetattachment?: Msdyn_customerassetattachment | undefined;
    private _objectid_msdyn_kbattachment?: Msdyn_kbattachment | undefined;
    private _objectid_msdyn_knowledgearticleimage?: Msdyn_knowledgearticleimage | undefined;
    private _objectid_msdyn_ocrecording?: Msdyn_ocrecording | undefined;
    private _objectid_msdyn_pminferredtask?: Msdyn_pminferredtask | undefined;
    private _objectid_msdyn_richtextfile?: Msdyn_richtextfile | undefined;
    private _objectid_msdyn_soundfile?: Msdyn_soundfile | undefined;
    private _objectid_msdyn_transcript?: Msdyn_transcript | undefined;
    private _objectid_msfp_fileresponse?: Msfp_fileresponse | undefined;
    private _objectid_pluginpackage?: Pluginpackage | undefined;
    private _objectid_stagesolutionupload?: Stagesolutionupload | undefined;
    private _objectid_webresource?: Webresource | undefined;
    private _objectid_workflowbinary?: Workflowbinary | undefined;
    private _objectid_workflowlog?: Workflowlog | undefined;
    private _objecttypecode?: string | undefined;
    private _regardingfieldname?: string | undefined;
    private _solution_fileid?: Solution[] | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _objectid_value property value. 
     * @returns a string
     */
    public get _objectid_value() {
        return this.__objectid_value;
    };
    /**
     * Sets the _objectid_value property value. 
     * @param value Value to set for the _objectid_value property.
     */
    public set _objectid_value(value: string | undefined) {
        this.__objectid_value = value;
    };
    /**
     * Instantiates a new fileattachment and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the fileAttachment_CanvasApp_BackgroundImage property value. 
     * @returns a canvasapp
     */
    public get fileAttachment_CanvasApp_BackgroundImage() {
        return this._fileAttachment_CanvasApp_BackgroundImage;
    };
    /**
     * Sets the fileAttachment_CanvasApp_BackgroundImage property value. 
     * @param value Value to set for the FileAttachment_CanvasApp_BackgroundImage property.
     */
    public set fileAttachment_CanvasApp_BackgroundImage(value: Canvasapp[] | undefined) {
        this._fileAttachment_CanvasApp_BackgroundImage = value;
    };
    /**
     * Gets the fileAttachment_CanvasApp_LargeIcon property value. 
     * @returns a canvasapp
     */
    public get fileAttachment_CanvasApp_LargeIcon() {
        return this._fileAttachment_CanvasApp_LargeIcon;
    };
    /**
     * Sets the fileAttachment_CanvasApp_LargeIcon property value. 
     * @param value Value to set for the FileAttachment_CanvasApp_LargeIcon property.
     */
    public set fileAttachment_CanvasApp_LargeIcon(value: Canvasapp[] | undefined) {
        this._fileAttachment_CanvasApp_LargeIcon = value;
    };
    /**
     * Gets the fileAttachment_CanvasApp_MediumIcon property value. 
     * @returns a canvasapp
     */
    public get fileAttachment_CanvasApp_MediumIcon() {
        return this._fileAttachment_CanvasApp_MediumIcon;
    };
    /**
     * Sets the fileAttachment_CanvasApp_MediumIcon property value. 
     * @param value Value to set for the FileAttachment_CanvasApp_MediumIcon property.
     */
    public set fileAttachment_CanvasApp_MediumIcon(value: Canvasapp[] | undefined) {
        this._fileAttachment_CanvasApp_MediumIcon = value;
    };
    /**
     * Gets the fileAttachment_CanvasApp_SmallIcon property value. 
     * @returns a canvasapp
     */
    public get fileAttachment_CanvasApp_SmallIcon() {
        return this._fileAttachment_CanvasApp_SmallIcon;
    };
    /**
     * Sets the fileAttachment_CanvasApp_SmallIcon property value. 
     * @param value Value to set for the FileAttachment_CanvasApp_SmallIcon property.
     */
    public set fileAttachment_CanvasApp_SmallIcon(value: Canvasapp[] | undefined) {
        this._fileAttachment_CanvasApp_SmallIcon = value;
    };
    /**
     * Gets the fileAttachment_CanvasApp_TeamsIcon property value. 
     * @returns a canvasapp
     */
    public get fileAttachment_CanvasApp_TeamsIcon() {
        return this._fileAttachment_CanvasApp_TeamsIcon;
    };
    /**
     * Sets the fileAttachment_CanvasApp_TeamsIcon property value. 
     * @param value Value to set for the FileAttachment_CanvasApp_TeamsIcon property.
     */
    public set fileAttachment_CanvasApp_TeamsIcon(value: Canvasapp[] | undefined) {
        this._fileAttachment_CanvasApp_TeamsIcon = value;
    };
    /**
     * Gets the fileAttachment_CanvasApp_WideIcon property value. 
     * @returns a canvasapp
     */
    public get fileAttachment_CanvasApp_WideIcon() {
        return this._fileAttachment_CanvasApp_WideIcon;
    };
    /**
     * Sets the fileAttachment_CanvasApp_WideIcon property value. 
     * @param value Value to set for the FileAttachment_CanvasApp_WideIcon property.
     */
    public set fileAttachment_CanvasApp_WideIcon(value: Canvasapp[] | undefined) {
        this._fileAttachment_CanvasApp_WideIcon = value;
    };
    /**
     * Gets the fileAttachment_pluginpackage_FileId property value. 
     * @returns a pluginpackage
     */
    public get fileAttachment_pluginpackage_FileId() {
        return this._fileAttachment_pluginpackage_FileId;
    };
    /**
     * Sets the fileAttachment_pluginpackage_FileId property value. 
     * @param value Value to set for the FileAttachment_pluginpackage_FileId property.
     */
    public set fileAttachment_pluginpackage_FileId(value: Pluginpackage[] | undefined) {
        this._fileAttachment_pluginpackage_FileId = value;
    };
    /**
     * Gets the fileAttachment_Solution property value. 
     * @returns a solution
     */
    public get fileAttachment_Solution() {
        return this._fileAttachment_Solution;
    };
    /**
     * Sets the fileAttachment_Solution property value. 
     * @param value Value to set for the FileAttachment_Solution property.
     */
    public set fileAttachment_Solution(value: Solution | undefined) {
        this._fileAttachment_Solution = value;
    };
    /**
     * Gets the fileAttachment_SyncErrors property value. 
     * @returns a syncerror
     */
    public get fileAttachment_SyncErrors() {
        return this._fileAttachment_SyncErrors;
    };
    /**
     * Sets the fileAttachment_SyncErrors property value. 
     * @param value Value to set for the FileAttachment_SyncErrors property.
     */
    public set fileAttachment_SyncErrors(value: Syncerror[] | undefined) {
        this._fileAttachment_SyncErrors = value;
    };
    /**
     * Gets the fileAttachment_WebResource_ContentFileRef property value. 
     * @returns a webresource
     */
    public get fileAttachment_WebResource_ContentFileRef() {
        return this._fileAttachment_WebResource_ContentFileRef;
    };
    /**
     * Sets the fileAttachment_WebResource_ContentFileRef property value. 
     * @param value Value to set for the FileAttachment_WebResource_ContentFileRef property.
     */
    public set fileAttachment_WebResource_ContentFileRef(value: Webresource[] | undefined) {
        this._fileAttachment_WebResource_ContentFileRef = value;
    };
    /**
     * Gets the fileAttachment_WebResource_ContentJsonFileRef property value. 
     * @returns a webresource
     */
    public get fileAttachment_WebResource_ContentJsonFileRef() {
        return this._fileAttachment_WebResource_ContentJsonFileRef;
    };
    /**
     * Sets the fileAttachment_WebResource_ContentJsonFileRef property value. 
     * @param value Value to set for the FileAttachment_WebResource_ContentJsonFileRef property.
     */
    public set fileAttachment_WebResource_ContentJsonFileRef(value: Webresource[] | undefined) {
        this._fileAttachment_WebResource_ContentJsonFileRef = value;
    };
    /**
     * Gets the fileattachmentid property value. 
     * @returns a string
     */
    public get fileattachmentid() {
        return this._fileattachmentid;
    };
    /**
     * Sets the fileattachmentid property value. 
     * @param value Value to set for the fileattachmentid property.
     */
    public set fileattachmentid(value: string | undefined) {
        this._fileattachmentid = value;
    };
    /**
     * Gets the filename property value. 
     * @returns a string
     */
    public get filename() {
        return this._filename;
    };
    /**
     * Sets the filename property value. 
     * @param value Value to set for the filename property.
     */
    public set filename(value: string | undefined) {
        this._filename = value;
    };
    /**
     * Gets the filesizeinbytes property value. 
     * @returns a int64
     */
    public get filesizeinbytes() {
        return this._filesizeinbytes;
    };
    /**
     * Sets the filesizeinbytes property value. 
     * @param value Value to set for the filesizeinbytes property.
     */
    public set filesizeinbytes(value: number | undefined) {
        this._filesizeinbytes = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_objectid_value": (o, n) => { (o as unknown as Fileattachment)._objectid_value = n.getStringValue(); },
            "createdon": (o, n) => { (o as unknown as Fileattachment).createdon = n.getDateValue(); },
            "fileAttachment_CanvasApp_BackgroundImage": (o, n) => { (o as unknown as Fileattachment).fileAttachment_CanvasApp_BackgroundImage = n.getCollectionOfObjectValues<Canvasapp>(createCanvasappFromDiscriminatorValue); },
            "fileAttachment_CanvasApp_LargeIcon": (o, n) => { (o as unknown as Fileattachment).fileAttachment_CanvasApp_LargeIcon = n.getCollectionOfObjectValues<Canvasapp>(createCanvasappFromDiscriminatorValue); },
            "fileAttachment_CanvasApp_MediumIcon": (o, n) => { (o as unknown as Fileattachment).fileAttachment_CanvasApp_MediumIcon = n.getCollectionOfObjectValues<Canvasapp>(createCanvasappFromDiscriminatorValue); },
            "fileAttachment_CanvasApp_SmallIcon": (o, n) => { (o as unknown as Fileattachment).fileAttachment_CanvasApp_SmallIcon = n.getCollectionOfObjectValues<Canvasapp>(createCanvasappFromDiscriminatorValue); },
            "fileAttachment_CanvasApp_TeamsIcon": (o, n) => { (o as unknown as Fileattachment).fileAttachment_CanvasApp_TeamsIcon = n.getCollectionOfObjectValues<Canvasapp>(createCanvasappFromDiscriminatorValue); },
            "fileAttachment_CanvasApp_WideIcon": (o, n) => { (o as unknown as Fileattachment).fileAttachment_CanvasApp_WideIcon = n.getCollectionOfObjectValues<Canvasapp>(createCanvasappFromDiscriminatorValue); },
            "fileAttachment_pluginpackage_FileId": (o, n) => { (o as unknown as Fileattachment).fileAttachment_pluginpackage_FileId = n.getCollectionOfObjectValues<Pluginpackage>(createPluginpackageFromDiscriminatorValue); },
            "fileAttachment_Solution": (o, n) => { (o as unknown as Fileattachment).fileAttachment_Solution = n.getObjectValue<Solution>(createSolutionFromDiscriminatorValue); },
            "fileAttachment_SyncErrors": (o, n) => { (o as unknown as Fileattachment).fileAttachment_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "fileAttachment_WebResource_ContentFileRef": (o, n) => { (o as unknown as Fileattachment).fileAttachment_WebResource_ContentFileRef = n.getCollectionOfObjectValues<Webresource>(createWebresourceFromDiscriminatorValue); },
            "fileAttachment_WebResource_ContentJsonFileRef": (o, n) => { (o as unknown as Fileattachment).fileAttachment_WebResource_ContentJsonFileRef = n.getCollectionOfObjectValues<Webresource>(createWebresourceFromDiscriminatorValue); },
            "fileattachmentid": (o, n) => { (o as unknown as Fileattachment).fileattachmentid = n.getStringValue(); },
            "filename": (o, n) => { (o as unknown as Fileattachment).filename = n.getStringValue(); },
            "filesizeinbytes": (o, n) => { (o as unknown as Fileattachment).filesizeinbytes = n.getNumberValue(); },
            "mimetype": (o, n) => { (o as unknown as Fileattachment).mimetype = n.getStringValue(); },
            "objectid_activityfileattachment": (o, n) => { (o as unknown as Fileattachment).objectid_activityfileattachment = n.getObjectValue<Activityfileattachment>(createActivityfileattachmentFromDiscriminatorValue); },
            "objectid_asyncoperation": (o, n) => { (o as unknown as Fileattachment).objectid_asyncoperation = n.getObjectValue<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "objectid_canvasapp": (o, n) => { (o as unknown as Fileattachment).objectid_canvasapp = n.getObjectValue<Canvasapp>(createCanvasappFromDiscriminatorValue); },
            "objectid_exportsolutionupload": (o, n) => { (o as unknown as Fileattachment).objectid_exportsolutionupload = n.getObjectValue<Exportsolutionupload>(createExportsolutionuploadFromDiscriminatorValue); },
            "objectid_flowsession": (o, n) => { (o as unknown as Fileattachment).objectid_flowsession = n.getObjectValue<Flowsession>(createFlowsessionFromDiscriminatorValue); },
            "objectid_mailbox": (o, n) => { (o as unknown as Fileattachment).objectid_mailbox = n.getObjectValue<Mailbox>(createMailboxFromDiscriminatorValue); },
            "objectid_msdyn_aibfile": (o, n) => { (o as unknown as Fileattachment).objectid_msdyn_aibfile = n.getObjectValue<Msdyn_aibfile>(createMsdyn_aibfileFromDiscriminatorValue); },
            "objectid_msdyn_aiconfiguration": (o, n) => { (o as unknown as Fileattachment).objectid_msdyn_aiconfiguration = n.getObjectValue<Msdyn_aiconfiguration>(createMsdyn_aiconfigurationFromDiscriminatorValue); },
            "objectid_msdyn_bookableresourcebookingquicknote": (o, n) => { (o as unknown as Fileattachment).objectid_msdyn_bookableresourcebookingquicknote = n.getObjectValue<Msdyn_bookableresourcebookingquicknote>(createMsdyn_bookableresourcebookingquicknoteFromDiscriminatorValue); },
            "objectid_msdyn_conversationinsight": (o, n) => { (o as unknown as Fileattachment).objectid_msdyn_conversationinsight = n.getObjectValue<Msdyn_conversationinsight>(createMsdyn_conversationinsightFromDiscriminatorValue); },
            "objectid_msdyn_customerassetattachment": (o, n) => { (o as unknown as Fileattachment).objectid_msdyn_customerassetattachment = n.getObjectValue<Msdyn_customerassetattachment>(createMsdyn_customerassetattachmentFromDiscriminatorValue); },
            "objectid_msdyn_kbattachment": (o, n) => { (o as unknown as Fileattachment).objectid_msdyn_kbattachment = n.getObjectValue<Msdyn_kbattachment>(createMsdyn_kbattachmentFromDiscriminatorValue); },
            "objectid_msdyn_knowledgearticleimage": (o, n) => { (o as unknown as Fileattachment).objectid_msdyn_knowledgearticleimage = n.getObjectValue<Msdyn_knowledgearticleimage>(createMsdyn_knowledgearticleimageFromDiscriminatorValue); },
            "objectid_msdyn_ocrecording": (o, n) => { (o as unknown as Fileattachment).objectid_msdyn_ocrecording = n.getObjectValue<Msdyn_ocrecording>(createMsdyn_ocrecordingFromDiscriminatorValue); },
            "objectid_msdyn_pminferredtask": (o, n) => { (o as unknown as Fileattachment).objectid_msdyn_pminferredtask = n.getObjectValue<Msdyn_pminferredtask>(createMsdyn_pminferredtaskFromDiscriminatorValue); },
            "objectid_msdyn_richtextfile": (o, n) => { (o as unknown as Fileattachment).objectid_msdyn_richtextfile = n.getObjectValue<Msdyn_richtextfile>(createMsdyn_richtextfileFromDiscriminatorValue); },
            "objectid_msdyn_soundfile": (o, n) => { (o as unknown as Fileattachment).objectid_msdyn_soundfile = n.getObjectValue<Msdyn_soundfile>(createMsdyn_soundfileFromDiscriminatorValue); },
            "objectid_msdyn_transcript": (o, n) => { (o as unknown as Fileattachment).objectid_msdyn_transcript = n.getObjectValue<Msdyn_transcript>(createMsdyn_transcriptFromDiscriminatorValue); },
            "objectid_msfp_fileresponse": (o, n) => { (o as unknown as Fileattachment).objectid_msfp_fileresponse = n.getObjectValue<Msfp_fileresponse>(createMsfp_fileresponseFromDiscriminatorValue); },
            "objectid_pluginpackage": (o, n) => { (o as unknown as Fileattachment).objectid_pluginpackage = n.getObjectValue<Pluginpackage>(createPluginpackageFromDiscriminatorValue); },
            "objectid_stagesolutionupload": (o, n) => { (o as unknown as Fileattachment).objectid_stagesolutionupload = n.getObjectValue<Stagesolutionupload>(createStagesolutionuploadFromDiscriminatorValue); },
            "objectid_webresource": (o, n) => { (o as unknown as Fileattachment).objectid_webresource = n.getObjectValue<Webresource>(createWebresourceFromDiscriminatorValue); },
            "objectid_workflowbinary": (o, n) => { (o as unknown as Fileattachment).objectid_workflowbinary = n.getObjectValue<Workflowbinary>(createWorkflowbinaryFromDiscriminatorValue); },
            "objectid_workflowlog": (o, n) => { (o as unknown as Fileattachment).objectid_workflowlog = n.getObjectValue<Workflowlog>(createWorkflowlogFromDiscriminatorValue); },
            "objecttypecode": (o, n) => { (o as unknown as Fileattachment).objecttypecode = n.getStringValue(); },
            "regardingfieldname": (o, n) => { (o as unknown as Fileattachment).regardingfieldname = n.getStringValue(); },
            "solution_fileid": (o, n) => { (o as unknown as Fileattachment).solution_fileid = n.getCollectionOfObjectValues<Solution>(createSolutionFromDiscriminatorValue); },
            "versionnumber": (o, n) => { (o as unknown as Fileattachment).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the mimetype property value. 
     * @returns a string
     */
    public get mimetype() {
        return this._mimetype;
    };
    /**
     * Sets the mimetype property value. 
     * @param value Value to set for the mimetype property.
     */
    public set mimetype(value: string | undefined) {
        this._mimetype = value;
    };
    /**
     * Gets the objectid_activityfileattachment property value. 
     * @returns a activityfileattachment
     */
    public get objectid_activityfileattachment() {
        return this._objectid_activityfileattachment;
    };
    /**
     * Sets the objectid_activityfileattachment property value. 
     * @param value Value to set for the objectid_activityfileattachment property.
     */
    public set objectid_activityfileattachment(value: Activityfileattachment | undefined) {
        this._objectid_activityfileattachment = value;
    };
    /**
     * Gets the objectid_asyncoperation property value. 
     * @returns a asyncoperation
     */
    public get objectid_asyncoperation() {
        return this._objectid_asyncoperation;
    };
    /**
     * Sets the objectid_asyncoperation property value. 
     * @param value Value to set for the objectid_asyncoperation property.
     */
    public set objectid_asyncoperation(value: Asyncoperation | undefined) {
        this._objectid_asyncoperation = value;
    };
    /**
     * Gets the objectid_canvasapp property value. 
     * @returns a canvasapp
     */
    public get objectid_canvasapp() {
        return this._objectid_canvasapp;
    };
    /**
     * Sets the objectid_canvasapp property value. 
     * @param value Value to set for the objectid_canvasapp property.
     */
    public set objectid_canvasapp(value: Canvasapp | undefined) {
        this._objectid_canvasapp = value;
    };
    /**
     * Gets the objectid_exportsolutionupload property value. 
     * @returns a exportsolutionupload
     */
    public get objectid_exportsolutionupload() {
        return this._objectid_exportsolutionupload;
    };
    /**
     * Sets the objectid_exportsolutionupload property value. 
     * @param value Value to set for the objectid_exportsolutionupload property.
     */
    public set objectid_exportsolutionupload(value: Exportsolutionupload | undefined) {
        this._objectid_exportsolutionupload = value;
    };
    /**
     * Gets the objectid_flowsession property value. 
     * @returns a flowsession
     */
    public get objectid_flowsession() {
        return this._objectid_flowsession;
    };
    /**
     * Sets the objectid_flowsession property value. 
     * @param value Value to set for the objectid_flowsession property.
     */
    public set objectid_flowsession(value: Flowsession | undefined) {
        this._objectid_flowsession = value;
    };
    /**
     * Gets the objectid_mailbox property value. 
     * @returns a mailbox
     */
    public get objectid_mailbox() {
        return this._objectid_mailbox;
    };
    /**
     * Sets the objectid_mailbox property value. 
     * @param value Value to set for the objectid_mailbox property.
     */
    public set objectid_mailbox(value: Mailbox | undefined) {
        this._objectid_mailbox = value;
    };
    /**
     * Gets the objectid_msdyn_aibfile property value. 
     * @returns a msdyn_aibfile
     */
    public get objectid_msdyn_aibfile() {
        return this._objectid_msdyn_aibfile;
    };
    /**
     * Sets the objectid_msdyn_aibfile property value. 
     * @param value Value to set for the objectid_msdyn_aibfile property.
     */
    public set objectid_msdyn_aibfile(value: Msdyn_aibfile | undefined) {
        this._objectid_msdyn_aibfile = value;
    };
    /**
     * Gets the objectid_msdyn_aiconfiguration property value. 
     * @returns a msdyn_aiconfiguration
     */
    public get objectid_msdyn_aiconfiguration() {
        return this._objectid_msdyn_aiconfiguration;
    };
    /**
     * Sets the objectid_msdyn_aiconfiguration property value. 
     * @param value Value to set for the objectid_msdyn_aiconfiguration property.
     */
    public set objectid_msdyn_aiconfiguration(value: Msdyn_aiconfiguration | undefined) {
        this._objectid_msdyn_aiconfiguration = value;
    };
    /**
     * Gets the objectid_msdyn_bookableresourcebookingquicknote property value. 
     * @returns a msdyn_bookableresourcebookingquicknote
     */
    public get objectid_msdyn_bookableresourcebookingquicknote() {
        return this._objectid_msdyn_bookableresourcebookingquicknote;
    };
    /**
     * Sets the objectid_msdyn_bookableresourcebookingquicknote property value. 
     * @param value Value to set for the objectid_msdyn_bookableresourcebookingquicknote property.
     */
    public set objectid_msdyn_bookableresourcebookingquicknote(value: Msdyn_bookableresourcebookingquicknote | undefined) {
        this._objectid_msdyn_bookableresourcebookingquicknote = value;
    };
    /**
     * Gets the objectid_msdyn_conversationinsight property value. 
     * @returns a msdyn_conversationinsight
     */
    public get objectid_msdyn_conversationinsight() {
        return this._objectid_msdyn_conversationinsight;
    };
    /**
     * Sets the objectid_msdyn_conversationinsight property value. 
     * @param value Value to set for the objectid_msdyn_conversationinsight property.
     */
    public set objectid_msdyn_conversationinsight(value: Msdyn_conversationinsight | undefined) {
        this._objectid_msdyn_conversationinsight = value;
    };
    /**
     * Gets the objectid_msdyn_customerassetattachment property value. 
     * @returns a msdyn_customerassetattachment
     */
    public get objectid_msdyn_customerassetattachment() {
        return this._objectid_msdyn_customerassetattachment;
    };
    /**
     * Sets the objectid_msdyn_customerassetattachment property value. 
     * @param value Value to set for the objectid_msdyn_customerassetattachment property.
     */
    public set objectid_msdyn_customerassetattachment(value: Msdyn_customerassetattachment | undefined) {
        this._objectid_msdyn_customerassetattachment = value;
    };
    /**
     * Gets the objectid_msdyn_kbattachment property value. 
     * @returns a msdyn_kbattachment
     */
    public get objectid_msdyn_kbattachment() {
        return this._objectid_msdyn_kbattachment;
    };
    /**
     * Sets the objectid_msdyn_kbattachment property value. 
     * @param value Value to set for the objectid_msdyn_kbattachment property.
     */
    public set objectid_msdyn_kbattachment(value: Msdyn_kbattachment | undefined) {
        this._objectid_msdyn_kbattachment = value;
    };
    /**
     * Gets the objectid_msdyn_knowledgearticleimage property value. 
     * @returns a msdyn_knowledgearticleimage
     */
    public get objectid_msdyn_knowledgearticleimage() {
        return this._objectid_msdyn_knowledgearticleimage;
    };
    /**
     * Sets the objectid_msdyn_knowledgearticleimage property value. 
     * @param value Value to set for the objectid_msdyn_knowledgearticleimage property.
     */
    public set objectid_msdyn_knowledgearticleimage(value: Msdyn_knowledgearticleimage | undefined) {
        this._objectid_msdyn_knowledgearticleimage = value;
    };
    /**
     * Gets the objectid_msdyn_ocrecording property value. 
     * @returns a msdyn_ocrecording
     */
    public get objectid_msdyn_ocrecording() {
        return this._objectid_msdyn_ocrecording;
    };
    /**
     * Sets the objectid_msdyn_ocrecording property value. 
     * @param value Value to set for the objectid_msdyn_ocrecording property.
     */
    public set objectid_msdyn_ocrecording(value: Msdyn_ocrecording | undefined) {
        this._objectid_msdyn_ocrecording = value;
    };
    /**
     * Gets the objectid_msdyn_pminferredtask property value. 
     * @returns a msdyn_pminferredtask
     */
    public get objectid_msdyn_pminferredtask() {
        return this._objectid_msdyn_pminferredtask;
    };
    /**
     * Sets the objectid_msdyn_pminferredtask property value. 
     * @param value Value to set for the objectid_msdyn_pminferredtask property.
     */
    public set objectid_msdyn_pminferredtask(value: Msdyn_pminferredtask | undefined) {
        this._objectid_msdyn_pminferredtask = value;
    };
    /**
     * Gets the objectid_msdyn_richtextfile property value. 
     * @returns a msdyn_richtextfile
     */
    public get objectid_msdyn_richtextfile() {
        return this._objectid_msdyn_richtextfile;
    };
    /**
     * Sets the objectid_msdyn_richtextfile property value. 
     * @param value Value to set for the objectid_msdyn_richtextfile property.
     */
    public set objectid_msdyn_richtextfile(value: Msdyn_richtextfile | undefined) {
        this._objectid_msdyn_richtextfile = value;
    };
    /**
     * Gets the objectid_msdyn_soundfile property value. 
     * @returns a msdyn_soundfile
     */
    public get objectid_msdyn_soundfile() {
        return this._objectid_msdyn_soundfile;
    };
    /**
     * Sets the objectid_msdyn_soundfile property value. 
     * @param value Value to set for the objectid_msdyn_soundfile property.
     */
    public set objectid_msdyn_soundfile(value: Msdyn_soundfile | undefined) {
        this._objectid_msdyn_soundfile = value;
    };
    /**
     * Gets the objectid_msdyn_transcript property value. 
     * @returns a msdyn_transcript
     */
    public get objectid_msdyn_transcript() {
        return this._objectid_msdyn_transcript;
    };
    /**
     * Sets the objectid_msdyn_transcript property value. 
     * @param value Value to set for the objectid_msdyn_transcript property.
     */
    public set objectid_msdyn_transcript(value: Msdyn_transcript | undefined) {
        this._objectid_msdyn_transcript = value;
    };
    /**
     * Gets the objectid_msfp_fileresponse property value. 
     * @returns a msfp_fileresponse
     */
    public get objectid_msfp_fileresponse() {
        return this._objectid_msfp_fileresponse;
    };
    /**
     * Sets the objectid_msfp_fileresponse property value. 
     * @param value Value to set for the objectid_msfp_fileresponse property.
     */
    public set objectid_msfp_fileresponse(value: Msfp_fileresponse | undefined) {
        this._objectid_msfp_fileresponse = value;
    };
    /**
     * Gets the objectid_pluginpackage property value. 
     * @returns a pluginpackage
     */
    public get objectid_pluginpackage() {
        return this._objectid_pluginpackage;
    };
    /**
     * Sets the objectid_pluginpackage property value. 
     * @param value Value to set for the objectid_pluginpackage property.
     */
    public set objectid_pluginpackage(value: Pluginpackage | undefined) {
        this._objectid_pluginpackage = value;
    };
    /**
     * Gets the objectid_stagesolutionupload property value. 
     * @returns a stagesolutionupload
     */
    public get objectid_stagesolutionupload() {
        return this._objectid_stagesolutionupload;
    };
    /**
     * Sets the objectid_stagesolutionupload property value. 
     * @param value Value to set for the objectid_stagesolutionupload property.
     */
    public set objectid_stagesolutionupload(value: Stagesolutionupload | undefined) {
        this._objectid_stagesolutionupload = value;
    };
    /**
     * Gets the objectid_webresource property value. 
     * @returns a webresource
     */
    public get objectid_webresource() {
        return this._objectid_webresource;
    };
    /**
     * Sets the objectid_webresource property value. 
     * @param value Value to set for the objectid_webresource property.
     */
    public set objectid_webresource(value: Webresource | undefined) {
        this._objectid_webresource = value;
    };
    /**
     * Gets the objectid_workflowbinary property value. 
     * @returns a workflowbinary
     */
    public get objectid_workflowbinary() {
        return this._objectid_workflowbinary;
    };
    /**
     * Sets the objectid_workflowbinary property value. 
     * @param value Value to set for the objectid_workflowbinary property.
     */
    public set objectid_workflowbinary(value: Workflowbinary | undefined) {
        this._objectid_workflowbinary = value;
    };
    /**
     * Gets the objectid_workflowlog property value. 
     * @returns a workflowlog
     */
    public get objectid_workflowlog() {
        return this._objectid_workflowlog;
    };
    /**
     * Sets the objectid_workflowlog property value. 
     * @param value Value to set for the objectid_workflowlog property.
     */
    public set objectid_workflowlog(value: Workflowlog | undefined) {
        this._objectid_workflowlog = value;
    };
    /**
     * Gets the objecttypecode property value. 
     * @returns a string
     */
    public get objecttypecode() {
        return this._objecttypecode;
    };
    /**
     * Sets the objecttypecode property value. 
     * @param value Value to set for the objecttypecode property.
     */
    public set objecttypecode(value: string | undefined) {
        this._objecttypecode = value;
    };
    /**
     * Gets the regardingfieldname property value. 
     * @returns a string
     */
    public get regardingfieldname() {
        return this._regardingfieldname;
    };
    /**
     * Sets the regardingfieldname property value. 
     * @param value Value to set for the regardingfieldname property.
     */
    public set regardingfieldname(value: string | undefined) {
        this._regardingfieldname = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_objectid_value", this._objectid_value);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeCollectionOfObjectValues<Canvasapp>("fileAttachment_CanvasApp_BackgroundImage", this.fileAttachment_CanvasApp_BackgroundImage);
        writer.writeCollectionOfObjectValues<Canvasapp>("fileAttachment_CanvasApp_LargeIcon", this.fileAttachment_CanvasApp_LargeIcon);
        writer.writeCollectionOfObjectValues<Canvasapp>("fileAttachment_CanvasApp_MediumIcon", this.fileAttachment_CanvasApp_MediumIcon);
        writer.writeCollectionOfObjectValues<Canvasapp>("fileAttachment_CanvasApp_SmallIcon", this.fileAttachment_CanvasApp_SmallIcon);
        writer.writeCollectionOfObjectValues<Canvasapp>("fileAttachment_CanvasApp_TeamsIcon", this.fileAttachment_CanvasApp_TeamsIcon);
        writer.writeCollectionOfObjectValues<Canvasapp>("fileAttachment_CanvasApp_WideIcon", this.fileAttachment_CanvasApp_WideIcon);
        writer.writeCollectionOfObjectValues<Pluginpackage>("fileAttachment_pluginpackage_FileId", this.fileAttachment_pluginpackage_FileId);
        writer.writeObjectValue<Solution>("fileAttachment_Solution", this.fileAttachment_Solution);
        writer.writeCollectionOfObjectValues<Syncerror>("fileAttachment_SyncErrors", this.fileAttachment_SyncErrors);
        writer.writeCollectionOfObjectValues<Webresource>("fileAttachment_WebResource_ContentFileRef", this.fileAttachment_WebResource_ContentFileRef);
        writer.writeCollectionOfObjectValues<Webresource>("fileAttachment_WebResource_ContentJsonFileRef", this.fileAttachment_WebResource_ContentJsonFileRef);
        writer.writeStringValue("fileattachmentid", this.fileattachmentid);
        writer.writeStringValue("filename", this.filename);
        writer.writeNumberValue("filesizeinbytes", this.filesizeinbytes);
        writer.writeStringValue("mimetype", this.mimetype);
        writer.writeObjectValue<Activityfileattachment>("objectid_activityfileattachment", this.objectid_activityfileattachment);
        writer.writeObjectValue<Asyncoperation>("objectid_asyncoperation", this.objectid_asyncoperation);
        writer.writeObjectValue<Canvasapp>("objectid_canvasapp", this.objectid_canvasapp);
        writer.writeObjectValue<Exportsolutionupload>("objectid_exportsolutionupload", this.objectid_exportsolutionupload);
        writer.writeObjectValue<Flowsession>("objectid_flowsession", this.objectid_flowsession);
        writer.writeObjectValue<Mailbox>("objectid_mailbox", this.objectid_mailbox);
        writer.writeObjectValue<Msdyn_aibfile>("objectid_msdyn_aibfile", this.objectid_msdyn_aibfile);
        writer.writeObjectValue<Msdyn_aiconfiguration>("objectid_msdyn_aiconfiguration", this.objectid_msdyn_aiconfiguration);
        writer.writeObjectValue<Msdyn_bookableresourcebookingquicknote>("objectid_msdyn_bookableresourcebookingquicknote", this.objectid_msdyn_bookableresourcebookingquicknote);
        writer.writeObjectValue<Msdyn_conversationinsight>("objectid_msdyn_conversationinsight", this.objectid_msdyn_conversationinsight);
        writer.writeObjectValue<Msdyn_customerassetattachment>("objectid_msdyn_customerassetattachment", this.objectid_msdyn_customerassetattachment);
        writer.writeObjectValue<Msdyn_kbattachment>("objectid_msdyn_kbattachment", this.objectid_msdyn_kbattachment);
        writer.writeObjectValue<Msdyn_knowledgearticleimage>("objectid_msdyn_knowledgearticleimage", this.objectid_msdyn_knowledgearticleimage);
        writer.writeObjectValue<Msdyn_ocrecording>("objectid_msdyn_ocrecording", this.objectid_msdyn_ocrecording);
        writer.writeObjectValue<Msdyn_pminferredtask>("objectid_msdyn_pminferredtask", this.objectid_msdyn_pminferredtask);
        writer.writeObjectValue<Msdyn_richtextfile>("objectid_msdyn_richtextfile", this.objectid_msdyn_richtextfile);
        writer.writeObjectValue<Msdyn_soundfile>("objectid_msdyn_soundfile", this.objectid_msdyn_soundfile);
        writer.writeObjectValue<Msdyn_transcript>("objectid_msdyn_transcript", this.objectid_msdyn_transcript);
        writer.writeObjectValue<Msfp_fileresponse>("objectid_msfp_fileresponse", this.objectid_msfp_fileresponse);
        writer.writeObjectValue<Pluginpackage>("objectid_pluginpackage", this.objectid_pluginpackage);
        writer.writeObjectValue<Stagesolutionupload>("objectid_stagesolutionupload", this.objectid_stagesolutionupload);
        writer.writeObjectValue<Webresource>("objectid_webresource", this.objectid_webresource);
        writer.writeObjectValue<Workflowbinary>("objectid_workflowbinary", this.objectid_workflowbinary);
        writer.writeObjectValue<Workflowlog>("objectid_workflowlog", this.objectid_workflowlog);
        writer.writeStringValue("objecttypecode", this.objecttypecode);
        writer.writeStringValue("regardingfieldname", this.regardingfieldname);
        writer.writeCollectionOfObjectValues<Solution>("solution_fileid", this.solution_fileid);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solution_fileid property value. 
     * @returns a solution
     */
    public get solution_fileid() {
        return this._solution_fileid;
    };
    /**
     * Sets the solution_fileid property value. 
     * @param value Value to set for the solution_fileid property.
     */
    public set solution_fileid(value: Solution[] | undefined) {
        this._solution_fileid = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}
