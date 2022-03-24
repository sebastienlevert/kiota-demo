import {createAppactionFromDiscriminatorValue} from './createAppactionFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createFileattachmentFromDiscriminatorValue} from './createFileattachmentFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createSolutionFromDiscriminatorValue} from './createSolutionFromDiscriminatorValue';
import {Appaction, BooleanManagedProperty, Businessunit, Crmbaseentity, Fileattachment, Principal, Solution} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Canvasapp extends Crmbaseentity implements Parsable {
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _aadcreatedbyid?: string | undefined;
    private _aadlastmodifiedbyid?: string | undefined;
    private _aadlastpublishedbyid?: string | undefined;
    private _admincontrolbypassconsent?: boolean | undefined;
    private _appcomponentdependencies?: string | undefined;
    private _appcomponents?: string | undefined;
    private _appopenuri?: string | undefined;
    private _appversion?: string | undefined;
    private _assets?: string | undefined;
    private _assets_name?: string | undefined;
    private _authorizationreferences?: string | undefined;
    private _background_image?: string | undefined;
    private _backgroundcolor?: string | undefined;
    private _backgroundimage?: Fileattachment | undefined;
    private _backgroundimage_name?: string | undefined;
    private _bypassconsent?: boolean | undefined;
    private _canconsumeapppass?: boolean | undefined;
    private _canvasapp_appaction_onclickeventformulacomponentlibraryid?: Appaction[] | undefined;
    private _canvasapp_appaction_visibilityformulacomponentlibraryid?: Appaction[] | undefined;
    private _canvasapp_FileAttachments?: Fileattachment[] | undefined;
    private _canvasappid?: string | undefined;
    private _canvasapprowid?: string | undefined;
    private _canvasapptype?: number | undefined;
    private _cdsdependencies?: string | undefined;
    private _commitmessage?: string | undefined;
    private _componentstate?: number | undefined;
    private _connectionreferences?: string | undefined;
    private _createdbyclientversion?: string | undefined;
    private _createdtime?: Date | undefined;
    private _databasereferences?: string | undefined;
    private _description?: string | undefined;
    private _displayname?: string | undefined;
    private _document?: string | undefined;
    private _document_name?: string | undefined;
    private _embeddedapp?: string | undefined;
    private _fK_CanvasApp_Solution?: Solution | undefined;
    private _galleryitemid?: string | undefined;
    private _introducedversion?: string | undefined;
    private _iscdsupgraded?: boolean | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _isfeaturedapp?: boolean | undefined;
    private _isheroapp?: boolean | undefined;
    private _ishidden?: boolean | undefined;
    private _ismanaged?: boolean | undefined;
    private _large_icon?: string | undefined;
    private _largeicon?: Fileattachment | undefined;
    private _largeicon_name?: string | undefined;
    private _lastmodifiedtime?: Date | undefined;
    private _lastpublishtime?: Date | undefined;
    private _medium_icon?: string | undefined;
    private _mediumicon?: Fileattachment | undefined;
    private _mediumicon_name?: string | undefined;
    private _minclientversion?: string | undefined;
    private _name?: string | undefined;
    private _overwritetime?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _publisher?: string | undefined;
    private _small_icon?: string | undefined;
    private _smallicon?: Fileattachment | undefined;
    private _smallicon_name?: string | undefined;
    private _solutionid?: string | undefined;
    private _status?: string | undefined;
    private _tags?: string | undefined;
    private _teams_icon?: string | undefined;
    private _teamsicon?: Fileattachment | undefined;
    private _teamsicon_name?: string | undefined;
    private _uniquecanvasappid?: string | undefined;
    private _versionnumber?: number | undefined;
    private _wide_icon?: string | undefined;
    private _wideicon?: Fileattachment | undefined;
    private _wideicon_name?: string | undefined;
    /**
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Gets the aadcreatedbyid property value. 
     * @returns a string
     */
    public get aadcreatedbyid() {
        return this._aadcreatedbyid;
    };
    /**
     * Sets the aadcreatedbyid property value. 
     * @param value Value to set for the aadcreatedbyid property.
     */
    public set aadcreatedbyid(value: string | undefined) {
        this._aadcreatedbyid = value;
    };
    /**
     * Gets the aadlastmodifiedbyid property value. 
     * @returns a string
     */
    public get aadlastmodifiedbyid() {
        return this._aadlastmodifiedbyid;
    };
    /**
     * Sets the aadlastmodifiedbyid property value. 
     * @param value Value to set for the aadlastmodifiedbyid property.
     */
    public set aadlastmodifiedbyid(value: string | undefined) {
        this._aadlastmodifiedbyid = value;
    };
    /**
     * Gets the aadlastpublishedbyid property value. 
     * @returns a string
     */
    public get aadlastpublishedbyid() {
        return this._aadlastpublishedbyid;
    };
    /**
     * Sets the aadlastpublishedbyid property value. 
     * @param value Value to set for the aadlastpublishedbyid property.
     */
    public set aadlastpublishedbyid(value: string | undefined) {
        this._aadlastpublishedbyid = value;
    };
    /**
     * Gets the admincontrolbypassconsent property value. 
     * @returns a boolean
     */
    public get admincontrolbypassconsent() {
        return this._admincontrolbypassconsent;
    };
    /**
     * Sets the admincontrolbypassconsent property value. 
     * @param value Value to set for the admincontrolbypassconsent property.
     */
    public set admincontrolbypassconsent(value: boolean | undefined) {
        this._admincontrolbypassconsent = value;
    };
    /**
     * Gets the appcomponentdependencies property value. 
     * @returns a string
     */
    public get appcomponentdependencies() {
        return this._appcomponentdependencies;
    };
    /**
     * Sets the appcomponentdependencies property value. 
     * @param value Value to set for the appcomponentdependencies property.
     */
    public set appcomponentdependencies(value: string | undefined) {
        this._appcomponentdependencies = value;
    };
    /**
     * Gets the appcomponents property value. 
     * @returns a string
     */
    public get appcomponents() {
        return this._appcomponents;
    };
    /**
     * Sets the appcomponents property value. 
     * @param value Value to set for the appcomponents property.
     */
    public set appcomponents(value: string | undefined) {
        this._appcomponents = value;
    };
    /**
     * Gets the appopenuri property value. 
     * @returns a string
     */
    public get appopenuri() {
        return this._appopenuri;
    };
    /**
     * Sets the appopenuri property value. 
     * @param value Value to set for the appopenuri property.
     */
    public set appopenuri(value: string | undefined) {
        this._appopenuri = value;
    };
    /**
     * Gets the appversion property value. 
     * @returns a string
     */
    public get appversion() {
        return this._appversion;
    };
    /**
     * Sets the appversion property value. 
     * @param value Value to set for the appversion property.
     */
    public set appversion(value: string | undefined) {
        this._appversion = value;
    };
    /**
     * Gets the assets property value. 
     * @returns a binary
     */
    public get assets() {
        return this._assets;
    };
    /**
     * Sets the assets property value. 
     * @param value Value to set for the assets property.
     */
    public set assets(value: string | undefined) {
        this._assets = value;
    };
    /**
     * Gets the assets_name property value. 
     * @returns a string
     */
    public get assets_name() {
        return this._assets_name;
    };
    /**
     * Sets the assets_name property value. 
     * @param value Value to set for the assets_name property.
     */
    public set assets_name(value: string | undefined) {
        this._assets_name = value;
    };
    /**
     * Gets the authorizationreferences property value. 
     * @returns a string
     */
    public get authorizationreferences() {
        return this._authorizationreferences;
    };
    /**
     * Sets the authorizationreferences property value. 
     * @param value Value to set for the authorizationreferences property.
     */
    public set authorizationreferences(value: string | undefined) {
        this._authorizationreferences = value;
    };
    /**
     * Gets the background_image property value. 
     * @returns a binary
     */
    public get background_image() {
        return this._background_image;
    };
    /**
     * Sets the background_image property value. 
     * @param value Value to set for the background_image property.
     */
    public set background_image(value: string | undefined) {
        this._background_image = value;
    };
    /**
     * Gets the backgroundcolor property value. 
     * @returns a string
     */
    public get backgroundcolor() {
        return this._backgroundcolor;
    };
    /**
     * Sets the backgroundcolor property value. 
     * @param value Value to set for the backgroundcolor property.
     */
    public set backgroundcolor(value: string | undefined) {
        this._backgroundcolor = value;
    };
    /**
     * Gets the backgroundimage property value. 
     * @returns a fileattachment
     */
    public get backgroundimage() {
        return this._backgroundimage;
    };
    /**
     * Sets the backgroundimage property value. 
     * @param value Value to set for the backgroundimage property.
     */
    public set backgroundimage(value: Fileattachment | undefined) {
        this._backgroundimage = value;
    };
    /**
     * Gets the backgroundimage_name property value. 
     * @returns a string
     */
    public get backgroundimage_name() {
        return this._backgroundimage_name;
    };
    /**
     * Sets the backgroundimage_name property value. 
     * @param value Value to set for the backgroundimage_name property.
     */
    public set backgroundimage_name(value: string | undefined) {
        this._backgroundimage_name = value;
    };
    /**
     * Gets the bypassconsent property value. 
     * @returns a boolean
     */
    public get bypassconsent() {
        return this._bypassconsent;
    };
    /**
     * Sets the bypassconsent property value. 
     * @param value Value to set for the bypassconsent property.
     */
    public set bypassconsent(value: boolean | undefined) {
        this._bypassconsent = value;
    };
    /**
     * Gets the canconsumeapppass property value. 
     * @returns a boolean
     */
    public get canconsumeapppass() {
        return this._canconsumeapppass;
    };
    /**
     * Sets the canconsumeapppass property value. 
     * @param value Value to set for the canconsumeapppass property.
     */
    public set canconsumeapppass(value: boolean | undefined) {
        this._canconsumeapppass = value;
    };
    /**
     * Gets the canvasapp_appaction_onclickeventformulacomponentlibraryid property value. 
     * @returns a appaction
     */
    public get canvasapp_appaction_onclickeventformulacomponentlibraryid() {
        return this._canvasapp_appaction_onclickeventformulacomponentlibraryid;
    };
    /**
     * Sets the canvasapp_appaction_onclickeventformulacomponentlibraryid property value. 
     * @param value Value to set for the canvasapp_appaction_onclickeventformulacomponentlibraryid property.
     */
    public set canvasapp_appaction_onclickeventformulacomponentlibraryid(value: Appaction[] | undefined) {
        this._canvasapp_appaction_onclickeventformulacomponentlibraryid = value;
    };
    /**
     * Gets the canvasapp_appaction_visibilityformulacomponentlibraryid property value. 
     * @returns a appaction
     */
    public get canvasapp_appaction_visibilityformulacomponentlibraryid() {
        return this._canvasapp_appaction_visibilityformulacomponentlibraryid;
    };
    /**
     * Sets the canvasapp_appaction_visibilityformulacomponentlibraryid property value. 
     * @param value Value to set for the canvasapp_appaction_visibilityformulacomponentlibraryid property.
     */
    public set canvasapp_appaction_visibilityformulacomponentlibraryid(value: Appaction[] | undefined) {
        this._canvasapp_appaction_visibilityformulacomponentlibraryid = value;
    };
    /**
     * Gets the canvasapp_FileAttachments property value. 
     * @returns a fileattachment
     */
    public get canvasapp_FileAttachments() {
        return this._canvasapp_FileAttachments;
    };
    /**
     * Sets the canvasapp_FileAttachments property value. 
     * @param value Value to set for the canvasapp_FileAttachments property.
     */
    public set canvasapp_FileAttachments(value: Fileattachment[] | undefined) {
        this._canvasapp_FileAttachments = value;
    };
    /**
     * Gets the canvasappid property value. 
     * @returns a string
     */
    public get canvasappid() {
        return this._canvasappid;
    };
    /**
     * Sets the canvasappid property value. 
     * @param value Value to set for the canvasappid property.
     */
    public set canvasappid(value: string | undefined) {
        this._canvasappid = value;
    };
    /**
     * Gets the canvasapprowid property value. 
     * @returns a string
     */
    public get canvasapprowid() {
        return this._canvasapprowid;
    };
    /**
     * Sets the canvasapprowid property value. 
     * @param value Value to set for the canvasapprowid property.
     */
    public set canvasapprowid(value: string | undefined) {
        this._canvasapprowid = value;
    };
    /**
     * Gets the canvasapptype property value. 
     * @returns a integer
     */
    public get canvasapptype() {
        return this._canvasapptype;
    };
    /**
     * Sets the canvasapptype property value. 
     * @param value Value to set for the canvasapptype property.
     */
    public set canvasapptype(value: number | undefined) {
        this._canvasapptype = value;
    };
    /**
     * Gets the cdsdependencies property value. 
     * @returns a string
     */
    public get cdsdependencies() {
        return this._cdsdependencies;
    };
    /**
     * Sets the cdsdependencies property value. 
     * @param value Value to set for the cdsdependencies property.
     */
    public set cdsdependencies(value: string | undefined) {
        this._cdsdependencies = value;
    };
    /**
     * Gets the commitmessage property value. 
     * @returns a string
     */
    public get commitmessage() {
        return this._commitmessage;
    };
    /**
     * Sets the commitmessage property value. 
     * @param value Value to set for the commitmessage property.
     */
    public set commitmessage(value: string | undefined) {
        this._commitmessage = value;
    };
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Gets the connectionreferences property value. 
     * @returns a string
     */
    public get connectionreferences() {
        return this._connectionreferences;
    };
    /**
     * Sets the connectionreferences property value. 
     * @param value Value to set for the connectionreferences property.
     */
    public set connectionreferences(value: string | undefined) {
        this._connectionreferences = value;
    };
    /**
     * Instantiates a new canvasapp and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdbyclientversion property value. 
     * @returns a string
     */
    public get createdbyclientversion() {
        return this._createdbyclientversion;
    };
    /**
     * Sets the createdbyclientversion property value. 
     * @param value Value to set for the createdbyclientversion property.
     */
    public set createdbyclientversion(value: string | undefined) {
        this._createdbyclientversion = value;
    };
    /**
     * Gets the createdtime property value. 
     * @returns a Date
     */
    public get createdtime() {
        return this._createdtime;
    };
    /**
     * Sets the createdtime property value. 
     * @param value Value to set for the createdtime property.
     */
    public set createdtime(value: Date | undefined) {
        this._createdtime = value;
    };
    /**
     * Gets the databasereferences property value. 
     * @returns a string
     */
    public get databasereferences() {
        return this._databasereferences;
    };
    /**
     * Sets the databasereferences property value. 
     * @param value Value to set for the databasereferences property.
     */
    public set databasereferences(value: string | undefined) {
        this._databasereferences = value;
    };
    /**
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayname property value. 
     * @returns a string
     */
    public get displayname() {
        return this._displayname;
    };
    /**
     * Sets the displayname property value. 
     * @param value Value to set for the displayname property.
     */
    public set displayname(value: string | undefined) {
        this._displayname = value;
    };
    /**
     * Gets the document property value. 
     * @returns a binary
     */
    public get document() {
        return this._document;
    };
    /**
     * Sets the document property value. 
     * @param value Value to set for the document property.
     */
    public set document(value: string | undefined) {
        this._document = value;
    };
    /**
     * Gets the document_name property value. 
     * @returns a string
     */
    public get document_name() {
        return this._document_name;
    };
    /**
     * Sets the document_name property value. 
     * @param value Value to set for the document_name property.
     */
    public set document_name(value: string | undefined) {
        this._document_name = value;
    };
    /**
     * Gets the embeddedapp property value. 
     * @returns a string
     */
    public get embeddedapp() {
        return this._embeddedapp;
    };
    /**
     * Sets the embeddedapp property value. 
     * @param value Value to set for the embeddedapp property.
     */
    public set embeddedapp(value: string | undefined) {
        this._embeddedapp = value;
    };
    /**
     * Gets the fK_CanvasApp_Solution property value. 
     * @returns a solution
     */
    public get fK_CanvasApp_Solution() {
        return this._fK_CanvasApp_Solution;
    };
    /**
     * Sets the fK_CanvasApp_Solution property value. 
     * @param value Value to set for the FK_CanvasApp_Solution property.
     */
    public set fK_CanvasApp_Solution(value: Solution | undefined) {
        this._fK_CanvasApp_Solution = value;
    };
    /**
     * Gets the galleryitemid property value. 
     * @returns a string
     */
    public get galleryitemid() {
        return this._galleryitemid;
    };
    /**
     * Sets the galleryitemid property value. 
     * @param value Value to set for the galleryitemid property.
     */
    public set galleryitemid(value: string | undefined) {
        this._galleryitemid = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_ownerid_value": (o, n) => { (o as unknown as Canvasapp)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Canvasapp)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Canvasapp)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Canvasapp)._owninguser_value = n.getStringValue(); },
            "aadcreatedbyid": (o, n) => { (o as unknown as Canvasapp).aadcreatedbyid = n.getStringValue(); },
            "aadlastmodifiedbyid": (o, n) => { (o as unknown as Canvasapp).aadlastmodifiedbyid = n.getStringValue(); },
            "aadlastpublishedbyid": (o, n) => { (o as unknown as Canvasapp).aadlastpublishedbyid = n.getStringValue(); },
            "admincontrolbypassconsent": (o, n) => { (o as unknown as Canvasapp).admincontrolbypassconsent = n.getBooleanValue(); },
            "appcomponentdependencies": (o, n) => { (o as unknown as Canvasapp).appcomponentdependencies = n.getStringValue(); },
            "appcomponents": (o, n) => { (o as unknown as Canvasapp).appcomponents = n.getStringValue(); },
            "appopenuri": (o, n) => { (o as unknown as Canvasapp).appopenuri = n.getStringValue(); },
            "appversion": (o, n) => { (o as unknown as Canvasapp).appversion = n.getStringValue(); },
            "assets": (o, n) => { (o as unknown as Canvasapp).assets = n.getStringValue(); },
            "assets_name": (o, n) => { (o as unknown as Canvasapp).assets_name = n.getStringValue(); },
            "authorizationreferences": (o, n) => { (o as unknown as Canvasapp).authorizationreferences = n.getStringValue(); },
            "background_image": (o, n) => { (o as unknown as Canvasapp).background_image = n.getStringValue(); },
            "backgroundcolor": (o, n) => { (o as unknown as Canvasapp).backgroundcolor = n.getStringValue(); },
            "backgroundimage": (o, n) => { (o as unknown as Canvasapp).backgroundimage = n.getObjectValue<Fileattachment>(createFileattachmentFromDiscriminatorValue); },
            "backgroundimage_name": (o, n) => { (o as unknown as Canvasapp).backgroundimage_name = n.getStringValue(); },
            "bypassconsent": (o, n) => { (o as unknown as Canvasapp).bypassconsent = n.getBooleanValue(); },
            "canconsumeapppass": (o, n) => { (o as unknown as Canvasapp).canconsumeapppass = n.getBooleanValue(); },
            "canvasapp_appaction_onclickeventformulacomponentlibraryid": (o, n) => { (o as unknown as Canvasapp).canvasapp_appaction_onclickeventformulacomponentlibraryid = n.getCollectionOfObjectValues<Appaction>(createAppactionFromDiscriminatorValue); },
            "canvasapp_appaction_visibilityformulacomponentlibraryid": (o, n) => { (o as unknown as Canvasapp).canvasapp_appaction_visibilityformulacomponentlibraryid = n.getCollectionOfObjectValues<Appaction>(createAppactionFromDiscriminatorValue); },
            "canvasapp_FileAttachments": (o, n) => { (o as unknown as Canvasapp).canvasapp_FileAttachments = n.getCollectionOfObjectValues<Fileattachment>(createFileattachmentFromDiscriminatorValue); },
            "canvasappid": (o, n) => { (o as unknown as Canvasapp).canvasappid = n.getStringValue(); },
            "canvasapprowid": (o, n) => { (o as unknown as Canvasapp).canvasapprowid = n.getStringValue(); },
            "canvasapptype": (o, n) => { (o as unknown as Canvasapp).canvasapptype = n.getNumberValue(); },
            "cdsdependencies": (o, n) => { (o as unknown as Canvasapp).cdsdependencies = n.getStringValue(); },
            "commitmessage": (o, n) => { (o as unknown as Canvasapp).commitmessage = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Canvasapp).componentstate = n.getNumberValue(); },
            "connectionreferences": (o, n) => { (o as unknown as Canvasapp).connectionreferences = n.getStringValue(); },
            "createdbyclientversion": (o, n) => { (o as unknown as Canvasapp).createdbyclientversion = n.getStringValue(); },
            "createdtime": (o, n) => { (o as unknown as Canvasapp).createdtime = n.getDateValue(); },
            "databasereferences": (o, n) => { (o as unknown as Canvasapp).databasereferences = n.getStringValue(); },
            "description": (o, n) => { (o as unknown as Canvasapp).description = n.getStringValue(); },
            "displayname": (o, n) => { (o as unknown as Canvasapp).displayname = n.getStringValue(); },
            "document": (o, n) => { (o as unknown as Canvasapp).document = n.getStringValue(); },
            "document_name": (o, n) => { (o as unknown as Canvasapp).document_name = n.getStringValue(); },
            "embeddedapp": (o, n) => { (o as unknown as Canvasapp).embeddedapp = n.getStringValue(); },
            "fK_CanvasApp_Solution": (o, n) => { (o as unknown as Canvasapp).fK_CanvasApp_Solution = n.getObjectValue<Solution>(createSolutionFromDiscriminatorValue); },
            "galleryitemid": (o, n) => { (o as unknown as Canvasapp).galleryitemid = n.getStringValue(); },
            "introducedversion": (o, n) => { (o as unknown as Canvasapp).introducedversion = n.getStringValue(); },
            "iscdsupgraded": (o, n) => { (o as unknown as Canvasapp).iscdsupgraded = n.getBooleanValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Canvasapp).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "isfeaturedapp": (o, n) => { (o as unknown as Canvasapp).isfeaturedapp = n.getBooleanValue(); },
            "isheroapp": (o, n) => { (o as unknown as Canvasapp).isheroapp = n.getBooleanValue(); },
            "ishidden": (o, n) => { (o as unknown as Canvasapp).ishidden = n.getBooleanValue(); },
            "ismanaged": (o, n) => { (o as unknown as Canvasapp).ismanaged = n.getBooleanValue(); },
            "large_icon": (o, n) => { (o as unknown as Canvasapp).large_icon = n.getStringValue(); },
            "largeicon": (o, n) => { (o as unknown as Canvasapp).largeicon = n.getObjectValue<Fileattachment>(createFileattachmentFromDiscriminatorValue); },
            "largeicon_name": (o, n) => { (o as unknown as Canvasapp).largeicon_name = n.getStringValue(); },
            "lastmodifiedtime": (o, n) => { (o as unknown as Canvasapp).lastmodifiedtime = n.getDateValue(); },
            "lastpublishtime": (o, n) => { (o as unknown as Canvasapp).lastpublishtime = n.getDateValue(); },
            "medium_icon": (o, n) => { (o as unknown as Canvasapp).medium_icon = n.getStringValue(); },
            "mediumicon": (o, n) => { (o as unknown as Canvasapp).mediumicon = n.getObjectValue<Fileattachment>(createFileattachmentFromDiscriminatorValue); },
            "mediumicon_name": (o, n) => { (o as unknown as Canvasapp).mediumicon_name = n.getStringValue(); },
            "minclientversion": (o, n) => { (o as unknown as Canvasapp).minclientversion = n.getStringValue(); },
            "name": (o, n) => { (o as unknown as Canvasapp).name = n.getStringValue(); },
            "overwritetime": (o, n) => { (o as unknown as Canvasapp).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Canvasapp).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Canvasapp).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "publisher": (o, n) => { (o as unknown as Canvasapp).publisher = n.getStringValue(); },
            "small_icon": (o, n) => { (o as unknown as Canvasapp).small_icon = n.getStringValue(); },
            "smallicon": (o, n) => { (o as unknown as Canvasapp).smallicon = n.getObjectValue<Fileattachment>(createFileattachmentFromDiscriminatorValue); },
            "smallicon_name": (o, n) => { (o as unknown as Canvasapp).smallicon_name = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Canvasapp).solutionid = n.getStringValue(); },
            "status": (o, n) => { (o as unknown as Canvasapp).status = n.getStringValue(); },
            "tags": (o, n) => { (o as unknown as Canvasapp).tags = n.getStringValue(); },
            "teams_icon": (o, n) => { (o as unknown as Canvasapp).teams_icon = n.getStringValue(); },
            "teamsicon": (o, n) => { (o as unknown as Canvasapp).teamsicon = n.getObjectValue<Fileattachment>(createFileattachmentFromDiscriminatorValue); },
            "teamsicon_name": (o, n) => { (o as unknown as Canvasapp).teamsicon_name = n.getStringValue(); },
            "uniquecanvasappid": (o, n) => { (o as unknown as Canvasapp).uniquecanvasappid = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Canvasapp).versionnumber = n.getNumberValue(); },
            "wide_icon": (o, n) => { (o as unknown as Canvasapp).wide_icon = n.getStringValue(); },
            "wideicon": (o, n) => { (o as unknown as Canvasapp).wideicon = n.getObjectValue<Fileattachment>(createFileattachmentFromDiscriminatorValue); },
            "wideicon_name": (o, n) => { (o as unknown as Canvasapp).wideicon_name = n.getStringValue(); },
        };
    };
    /**
     * Gets the introducedversion property value. 
     * @returns a string
     */
    public get introducedversion() {
        return this._introducedversion;
    };
    /**
     * Sets the introducedversion property value. 
     * @param value Value to set for the introducedversion property.
     */
    public set introducedversion(value: string | undefined) {
        this._introducedversion = value;
    };
    /**
     * Gets the iscdsupgraded property value. 
     * @returns a boolean
     */
    public get iscdsupgraded() {
        return this._iscdsupgraded;
    };
    /**
     * Sets the iscdsupgraded property value. 
     * @param value Value to set for the iscdsupgraded property.
     */
    public set iscdsupgraded(value: boolean | undefined) {
        this._iscdsupgraded = value;
    };
    /**
     * Gets the iscustomizable property value. 
     * @returns a BooleanManagedProperty
     */
    public get iscustomizable() {
        return this._iscustomizable;
    };
    /**
     * Sets the iscustomizable property value. 
     * @param value Value to set for the iscustomizable property.
     */
    public set iscustomizable(value: BooleanManagedProperty | undefined) {
        this._iscustomizable = value;
    };
    /**
     * Gets the isfeaturedapp property value. 
     * @returns a boolean
     */
    public get isfeaturedapp() {
        return this._isfeaturedapp;
    };
    /**
     * Sets the isfeaturedapp property value. 
     * @param value Value to set for the isfeaturedapp property.
     */
    public set isfeaturedapp(value: boolean | undefined) {
        this._isfeaturedapp = value;
    };
    /**
     * Gets the isheroapp property value. 
     * @returns a boolean
     */
    public get isheroapp() {
        return this._isheroapp;
    };
    /**
     * Sets the isheroapp property value. 
     * @param value Value to set for the isheroapp property.
     */
    public set isheroapp(value: boolean | undefined) {
        this._isheroapp = value;
    };
    /**
     * Gets the ishidden property value. 
     * @returns a boolean
     */
    public get ishidden() {
        return this._ishidden;
    };
    /**
     * Sets the ishidden property value. 
     * @param value Value to set for the ishidden property.
     */
    public set ishidden(value: boolean | undefined) {
        this._ishidden = value;
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
    };
    /**
     * Gets the large_icon property value. 
     * @returns a binary
     */
    public get large_icon() {
        return this._large_icon;
    };
    /**
     * Sets the large_icon property value. 
     * @param value Value to set for the large_icon property.
     */
    public set large_icon(value: string | undefined) {
        this._large_icon = value;
    };
    /**
     * Gets the largeicon property value. 
     * @returns a fileattachment
     */
    public get largeicon() {
        return this._largeicon;
    };
    /**
     * Sets the largeicon property value. 
     * @param value Value to set for the largeicon property.
     */
    public set largeicon(value: Fileattachment | undefined) {
        this._largeicon = value;
    };
    /**
     * Gets the largeicon_name property value. 
     * @returns a string
     */
    public get largeicon_name() {
        return this._largeicon_name;
    };
    /**
     * Sets the largeicon_name property value. 
     * @param value Value to set for the largeicon_name property.
     */
    public set largeicon_name(value: string | undefined) {
        this._largeicon_name = value;
    };
    /**
     * Gets the lastmodifiedtime property value. 
     * @returns a Date
     */
    public get lastmodifiedtime() {
        return this._lastmodifiedtime;
    };
    /**
     * Sets the lastmodifiedtime property value. 
     * @param value Value to set for the lastmodifiedtime property.
     */
    public set lastmodifiedtime(value: Date | undefined) {
        this._lastmodifiedtime = value;
    };
    /**
     * Gets the lastpublishtime property value. 
     * @returns a Date
     */
    public get lastpublishtime() {
        return this._lastpublishtime;
    };
    /**
     * Sets the lastpublishtime property value. 
     * @param value Value to set for the lastpublishtime property.
     */
    public set lastpublishtime(value: Date | undefined) {
        this._lastpublishtime = value;
    };
    /**
     * Gets the medium_icon property value. 
     * @returns a binary
     */
    public get medium_icon() {
        return this._medium_icon;
    };
    /**
     * Sets the medium_icon property value. 
     * @param value Value to set for the medium_icon property.
     */
    public set medium_icon(value: string | undefined) {
        this._medium_icon = value;
    };
    /**
     * Gets the mediumicon property value. 
     * @returns a fileattachment
     */
    public get mediumicon() {
        return this._mediumicon;
    };
    /**
     * Sets the mediumicon property value. 
     * @param value Value to set for the mediumicon property.
     */
    public set mediumicon(value: Fileattachment | undefined) {
        this._mediumicon = value;
    };
    /**
     * Gets the mediumicon_name property value. 
     * @returns a string
     */
    public get mediumicon_name() {
        return this._mediumicon_name;
    };
    /**
     * Sets the mediumicon_name property value. 
     * @param value Value to set for the mediumicon_name property.
     */
    public set mediumicon_name(value: string | undefined) {
        this._mediumicon_name = value;
    };
    /**
     * Gets the minclientversion property value. 
     * @returns a string
     */
    public get minclientversion() {
        return this._minclientversion;
    };
    /**
     * Sets the minclientversion property value. 
     * @param value Value to set for the minclientversion property.
     */
    public set minclientversion(value: string | undefined) {
        this._minclientversion = value;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
    };
    /**
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the publisher property value. 
     * @returns a string
     */
    public get publisher() {
        return this._publisher;
    };
    /**
     * Sets the publisher property value. 
     * @param value Value to set for the publisher property.
     */
    public set publisher(value: string | undefined) {
        this._publisher = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("aadcreatedbyid", this.aadcreatedbyid);
        writer.writeStringValue("aadlastmodifiedbyid", this.aadlastmodifiedbyid);
        writer.writeStringValue("aadlastpublishedbyid", this.aadlastpublishedbyid);
        writer.writeBooleanValue("admincontrolbypassconsent", this.admincontrolbypassconsent);
        writer.writeStringValue("appcomponentdependencies", this.appcomponentdependencies);
        writer.writeStringValue("appcomponents", this.appcomponents);
        writer.writeStringValue("appopenuri", this.appopenuri);
        writer.writeStringValue("appversion", this.appversion);
        writer.writeStringValue("assets", this.assets);
        writer.writeStringValue("assets_name", this.assets_name);
        writer.writeStringValue("authorizationreferences", this.authorizationreferences);
        writer.writeStringValue("background_image", this.background_image);
        writer.writeStringValue("backgroundcolor", this.backgroundcolor);
        writer.writeObjectValue<Fileattachment>("backgroundimage", this.backgroundimage);
        writer.writeStringValue("backgroundimage_name", this.backgroundimage_name);
        writer.writeBooleanValue("bypassconsent", this.bypassconsent);
        writer.writeBooleanValue("canconsumeapppass", this.canconsumeapppass);
        writer.writeCollectionOfObjectValues<Appaction>("canvasapp_appaction_onclickeventformulacomponentlibraryid", this.canvasapp_appaction_onclickeventformulacomponentlibraryid);
        writer.writeCollectionOfObjectValues<Appaction>("canvasapp_appaction_visibilityformulacomponentlibraryid", this.canvasapp_appaction_visibilityformulacomponentlibraryid);
        writer.writeCollectionOfObjectValues<Fileattachment>("canvasapp_FileAttachments", this.canvasapp_FileAttachments);
        writer.writeStringValue("canvasappid", this.canvasappid);
        writer.writeStringValue("canvasapprowid", this.canvasapprowid);
        writer.writeNumberValue("canvasapptype", this.canvasapptype);
        writer.writeStringValue("cdsdependencies", this.cdsdependencies);
        writer.writeStringValue("commitmessage", this.commitmessage);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeStringValue("connectionreferences", this.connectionreferences);
        writer.writeStringValue("createdbyclientversion", this.createdbyclientversion);
        writer.writeDateValue("createdtime", this.createdtime);
        writer.writeStringValue("databasereferences", this.databasereferences);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayname", this.displayname);
        writer.writeStringValue("document", this.document);
        writer.writeStringValue("document_name", this.document_name);
        writer.writeStringValue("embeddedapp", this.embeddedapp);
        writer.writeObjectValue<Solution>("fK_CanvasApp_Solution", this.fK_CanvasApp_Solution);
        writer.writeStringValue("galleryitemid", this.galleryitemid);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("iscdsupgraded", this.iscdsupgraded);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("isfeaturedapp", this.isfeaturedapp);
        writer.writeBooleanValue("isheroapp", this.isheroapp);
        writer.writeBooleanValue("ishidden", this.ishidden);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeStringValue("large_icon", this.large_icon);
        writer.writeObjectValue<Fileattachment>("largeicon", this.largeicon);
        writer.writeStringValue("largeicon_name", this.largeicon_name);
        writer.writeDateValue("lastmodifiedtime", this.lastmodifiedtime);
        writer.writeDateValue("lastpublishtime", this.lastpublishtime);
        writer.writeStringValue("medium_icon", this.medium_icon);
        writer.writeObjectValue<Fileattachment>("mediumicon", this.mediumicon);
        writer.writeStringValue("mediumicon_name", this.mediumicon_name);
        writer.writeStringValue("minclientversion", this.minclientversion);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeStringValue("publisher", this.publisher);
        writer.writeStringValue("small_icon", this.small_icon);
        writer.writeObjectValue<Fileattachment>("smallicon", this.smallicon);
        writer.writeStringValue("smallicon_name", this.smallicon_name);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeStringValue("status", this.status);
        writer.writeStringValue("tags", this.tags);
        writer.writeStringValue("teams_icon", this.teams_icon);
        writer.writeObjectValue<Fileattachment>("teamsicon", this.teamsicon);
        writer.writeStringValue("teamsicon_name", this.teamsicon_name);
        writer.writeStringValue("uniquecanvasappid", this.uniquecanvasappid);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeStringValue("wide_icon", this.wide_icon);
        writer.writeObjectValue<Fileattachment>("wideicon", this.wideicon);
        writer.writeStringValue("wideicon_name", this.wideicon_name);
    };
    /**
     * Gets the small_icon property value. 
     * @returns a binary
     */
    public get small_icon() {
        return this._small_icon;
    };
    /**
     * Sets the small_icon property value. 
     * @param value Value to set for the small_icon property.
     */
    public set small_icon(value: string | undefined) {
        this._small_icon = value;
    };
    /**
     * Gets the smallicon property value. 
     * @returns a fileattachment
     */
    public get smallicon() {
        return this._smallicon;
    };
    /**
     * Sets the smallicon property value. 
     * @param value Value to set for the smallicon property.
     */
    public set smallicon(value: Fileattachment | undefined) {
        this._smallicon = value;
    };
    /**
     * Gets the smallicon_name property value. 
     * @returns a string
     */
    public get smallicon_name() {
        return this._smallicon_name;
    };
    /**
     * Sets the smallicon_name property value. 
     * @param value Value to set for the smallicon_name property.
     */
    public set smallicon_name(value: string | undefined) {
        this._smallicon_name = value;
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
    };
    /**
     * Gets the status property value. 
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. 
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
    /**
     * Gets the tags property value. 
     * @returns a string
     */
    public get tags() {
        return this._tags;
    };
    /**
     * Sets the tags property value. 
     * @param value Value to set for the tags property.
     */
    public set tags(value: string | undefined) {
        this._tags = value;
    };
    /**
     * Gets the teams_icon property value. 
     * @returns a binary
     */
    public get teams_icon() {
        return this._teams_icon;
    };
    /**
     * Sets the teams_icon property value. 
     * @param value Value to set for the teams_icon property.
     */
    public set teams_icon(value: string | undefined) {
        this._teams_icon = value;
    };
    /**
     * Gets the teamsicon property value. 
     * @returns a fileattachment
     */
    public get teamsicon() {
        return this._teamsicon;
    };
    /**
     * Sets the teamsicon property value. 
     * @param value Value to set for the teamsicon property.
     */
    public set teamsicon(value: Fileattachment | undefined) {
        this._teamsicon = value;
    };
    /**
     * Gets the teamsicon_name property value. 
     * @returns a string
     */
    public get teamsicon_name() {
        return this._teamsicon_name;
    };
    /**
     * Sets the teamsicon_name property value. 
     * @param value Value to set for the teamsicon_name property.
     */
    public set teamsicon_name(value: string | undefined) {
        this._teamsicon_name = value;
    };
    /**
     * Gets the uniquecanvasappid property value. 
     * @returns a string
     */
    public get uniquecanvasappid() {
        return this._uniquecanvasappid;
    };
    /**
     * Sets the uniquecanvasappid property value. 
     * @param value Value to set for the uniquecanvasappid property.
     */
    public set uniquecanvasappid(value: string | undefined) {
        this._uniquecanvasappid = value;
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
    /**
     * Gets the wide_icon property value. 
     * @returns a binary
     */
    public get wide_icon() {
        return this._wide_icon;
    };
    /**
     * Sets the wide_icon property value. 
     * @param value Value to set for the wide_icon property.
     */
    public set wide_icon(value: string | undefined) {
        this._wide_icon = value;
    };
    /**
     * Gets the wideicon property value. 
     * @returns a fileattachment
     */
    public get wideicon() {
        return this._wideicon;
    };
    /**
     * Sets the wideicon property value. 
     * @param value Value to set for the wideicon property.
     */
    public set wideicon(value: Fileattachment | undefined) {
        this._wideicon = value;
    };
    /**
     * Gets the wideicon_name property value. 
     * @returns a string
     */
    public get wideicon_name() {
        return this._wideicon_name;
    };
    /**
     * Sets the wideicon_name property value. 
     * @param value Value to set for the wideicon_name property.
     */
    public set wideicon_name(value: string | undefined) {
        this._wideicon_name = value;
    };
}
