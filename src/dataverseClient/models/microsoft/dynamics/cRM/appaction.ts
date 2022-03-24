import {createAppmoduleFromDiscriminatorValue} from './createAppmoduleFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createCanvasappFromDiscriminatorValue} from './createCanvasappFromDiscriminatorValue';
import {createEntityFromDiscriminatorValue} from './createEntityFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createWebresourceFromDiscriminatorValue} from './createWebresourceFromDiscriminatorValue';
import {Appmodule, Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Canvasapp, Crmbaseentity, Entity, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Webresource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Appaction extends Crmbaseentity implements Parsable {
    private __appmoduleid_value?: string | undefined;
    private __contextentity_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __iconwebresourceid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __onclickeventformulacomponentlibraryid_value?: string | undefined;
    private __onclickeventjavascriptwebresourceid_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __visibilityformulacomponentlibraryid_value?: string | undefined;
    private _appaction_AsyncOperations?: Asyncoperation[] | undefined;
    private _appaction_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _appaction_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _appaction_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _appaction_ProcessSession?: Processsession[] | undefined;
    private _appaction_SyncErrors?: Syncerror[] | undefined;
    private _appactionid?: string | undefined;
    private _appModuleId?: Appmodule | undefined;
    private _buttonaccessibilitytext?: string | undefined;
    private _buttonlabeltext?: string | undefined;
    private _buttonsequencepriority?: number | undefined;
    private _buttontooltipdescription?: string | undefined;
    private _buttontooltiptitle?: string | undefined;
    private _clienttype?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _context?: number | undefined;
    private _contextEntity?: Entity | undefined;
    private _contextvalue?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _fonticon?: string | undefined;
    private _hidden?: boolean | undefined;
    private _iconWebResourceId?: Webresource | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _location?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _onclickeventformulacomponentlibrary?: string | undefined;
    private _onClickEventFormulaComponentLibraryId?: Canvasapp | undefined;
    private _onclickeventformulacomponentname?: string | undefined;
    private _onclickeventformulafunctionname?: string | undefined;
    private _onclickeventjavascriptfunctionname?: string | undefined;
    private _onclickeventjavascriptparameters?: string | undefined;
    private _onClickEventJavaScriptWebResourceId?: Webresource | undefined;
    private _onclickeventtype?: number | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _solutionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _type?: number | undefined;
    private _uniquename?: string | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    private _visibilityformulacomponentlibrary?: string | undefined;
    private _visibilityFormulaComponentLibraryId?: Canvasapp | undefined;
    private _visibilityformulacomponentname?: string | undefined;
    private _visibilityformulafunctionname?: string | undefined;
    /**
     * Gets the _appmoduleid_value property value. 
     * @returns a string
     */
    public get _appmoduleid_value() {
        return this.__appmoduleid_value;
    };
    /**
     * Sets the _appmoduleid_value property value. 
     * @param value Value to set for the _appmoduleid_value property.
     */
    public set _appmoduleid_value(value: string | undefined) {
        this.__appmoduleid_value = value;
    };
    /**
     * Gets the _contextentity_value property value. 
     * @returns a string
     */
    public get _contextentity_value() {
        return this.__contextentity_value;
    };
    /**
     * Sets the _contextentity_value property value. 
     * @param value Value to set for the _contextentity_value property.
     */
    public set _contextentity_value(value: string | undefined) {
        this.__contextentity_value = value;
    };
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _iconwebresourceid_value property value. 
     * @returns a string
     */
    public get _iconwebresourceid_value() {
        return this.__iconwebresourceid_value;
    };
    /**
     * Sets the _iconwebresourceid_value property value. 
     * @param value Value to set for the _iconwebresourceid_value property.
     */
    public set _iconwebresourceid_value(value: string | undefined) {
        this.__iconwebresourceid_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _onclickeventformulacomponentlibraryid_value property value. 
     * @returns a string
     */
    public get _onclickeventformulacomponentlibraryid_value() {
        return this.__onclickeventformulacomponentlibraryid_value;
    };
    /**
     * Sets the _onclickeventformulacomponentlibraryid_value property value. 
     * @param value Value to set for the _onclickeventformulacomponentlibraryid_value property.
     */
    public set _onclickeventformulacomponentlibraryid_value(value: string | undefined) {
        this.__onclickeventformulacomponentlibraryid_value = value;
    };
    /**
     * Gets the _onclickeventjavascriptwebresourceid_value property value. 
     * @returns a string
     */
    public get _onclickeventjavascriptwebresourceid_value() {
        return this.__onclickeventjavascriptwebresourceid_value;
    };
    /**
     * Sets the _onclickeventjavascriptwebresourceid_value property value. 
     * @param value Value to set for the _onclickeventjavascriptwebresourceid_value property.
     */
    public set _onclickeventjavascriptwebresourceid_value(value: string | undefined) {
        this.__onclickeventjavascriptwebresourceid_value = value;
    };
    /**
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
    };
    /**
     * Gets the _visibilityformulacomponentlibraryid_value property value. 
     * @returns a string
     */
    public get _visibilityformulacomponentlibraryid_value() {
        return this.__visibilityformulacomponentlibraryid_value;
    };
    /**
     * Sets the _visibilityformulacomponentlibraryid_value property value. 
     * @param value Value to set for the _visibilityformulacomponentlibraryid_value property.
     */
    public set _visibilityformulacomponentlibraryid_value(value: string | undefined) {
        this.__visibilityformulacomponentlibraryid_value = value;
    };
    /**
     * Gets the appaction_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get appaction_AsyncOperations() {
        return this._appaction_AsyncOperations;
    };
    /**
     * Sets the appaction_AsyncOperations property value. 
     * @param value Value to set for the appaction_AsyncOperations property.
     */
    public set appaction_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._appaction_AsyncOperations = value;
    };
    /**
     * Gets the appaction_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get appaction_BulkDeleteFailures() {
        return this._appaction_BulkDeleteFailures;
    };
    /**
     * Sets the appaction_BulkDeleteFailures property value. 
     * @param value Value to set for the appaction_BulkDeleteFailures property.
     */
    public set appaction_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._appaction_BulkDeleteFailures = value;
    };
    /**
     * Gets the appaction_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get appaction_MailboxTrackingFolders() {
        return this._appaction_MailboxTrackingFolders;
    };
    /**
     * Sets the appaction_MailboxTrackingFolders property value. 
     * @param value Value to set for the appaction_MailboxTrackingFolders property.
     */
    public set appaction_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._appaction_MailboxTrackingFolders = value;
    };
    /**
     * Gets the appaction_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get appaction_PrincipalObjectAttributeAccesses() {
        return this._appaction_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the appaction_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the appaction_PrincipalObjectAttributeAccesses property.
     */
    public set appaction_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._appaction_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the appaction_ProcessSession property value. 
     * @returns a processsession
     */
    public get appaction_ProcessSession() {
        return this._appaction_ProcessSession;
    };
    /**
     * Sets the appaction_ProcessSession property value. 
     * @param value Value to set for the appaction_ProcessSession property.
     */
    public set appaction_ProcessSession(value: Processsession[] | undefined) {
        this._appaction_ProcessSession = value;
    };
    /**
     * Gets the appaction_SyncErrors property value. 
     * @returns a syncerror
     */
    public get appaction_SyncErrors() {
        return this._appaction_SyncErrors;
    };
    /**
     * Sets the appaction_SyncErrors property value. 
     * @param value Value to set for the appaction_SyncErrors property.
     */
    public set appaction_SyncErrors(value: Syncerror[] | undefined) {
        this._appaction_SyncErrors = value;
    };
    /**
     * Gets the appactionid property value. 
     * @returns a string
     */
    public get appactionid() {
        return this._appactionid;
    };
    /**
     * Sets the appactionid property value. 
     * @param value Value to set for the appactionid property.
     */
    public set appactionid(value: string | undefined) {
        this._appactionid = value;
    };
    /**
     * Gets the appModuleId property value. 
     * @returns a appmodule
     */
    public get appModuleId() {
        return this._appModuleId;
    };
    /**
     * Sets the appModuleId property value. 
     * @param value Value to set for the AppModuleId property.
     */
    public set appModuleId(value: Appmodule | undefined) {
        this._appModuleId = value;
    };
    /**
     * Gets the buttonaccessibilitytext property value. 
     * @returns a string
     */
    public get buttonaccessibilitytext() {
        return this._buttonaccessibilitytext;
    };
    /**
     * Sets the buttonaccessibilitytext property value. 
     * @param value Value to set for the buttonaccessibilitytext property.
     */
    public set buttonaccessibilitytext(value: string | undefined) {
        this._buttonaccessibilitytext = value;
    };
    /**
     * Gets the buttonlabeltext property value. 
     * @returns a string
     */
    public get buttonlabeltext() {
        return this._buttonlabeltext;
    };
    /**
     * Sets the buttonlabeltext property value. 
     * @param value Value to set for the buttonlabeltext property.
     */
    public set buttonlabeltext(value: string | undefined) {
        this._buttonlabeltext = value;
    };
    /**
     * Gets the buttonsequencepriority property value. 
     * @returns a int64
     */
    public get buttonsequencepriority() {
        return this._buttonsequencepriority;
    };
    /**
     * Sets the buttonsequencepriority property value. 
     * @param value Value to set for the buttonsequencepriority property.
     */
    public set buttonsequencepriority(value: number | undefined) {
        this._buttonsequencepriority = value;
    };
    /**
     * Gets the buttontooltipdescription property value. 
     * @returns a string
     */
    public get buttontooltipdescription() {
        return this._buttontooltipdescription;
    };
    /**
     * Sets the buttontooltipdescription property value. 
     * @param value Value to set for the buttontooltipdescription property.
     */
    public set buttontooltipdescription(value: string | undefined) {
        this._buttontooltipdescription = value;
    };
    /**
     * Gets the buttontooltiptitle property value. 
     * @returns a string
     */
    public get buttontooltiptitle() {
        return this._buttontooltiptitle;
    };
    /**
     * Sets the buttontooltiptitle property value. 
     * @param value Value to set for the buttontooltiptitle property.
     */
    public set buttontooltiptitle(value: string | undefined) {
        this._buttontooltiptitle = value;
    };
    /**
     * Gets the clienttype property value. 
     * @returns a string
     */
    public get clienttype() {
        return this._clienttype;
    };
    /**
     * Sets the clienttype property value. 
     * @param value Value to set for the clienttype property.
     */
    public set clienttype(value: string | undefined) {
        this._clienttype = value;
    };
    /**
     * Gets the componentidunique property value. 
     * @returns a string
     */
    public get componentidunique() {
        return this._componentidunique;
    };
    /**
     * Sets the componentidunique property value. 
     * @param value Value to set for the componentidunique property.
     */
    public set componentidunique(value: string | undefined) {
        this._componentidunique = value;
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
     * Instantiates a new appaction and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the context property value. 
     * @returns a integer
     */
    public get context() {
        return this._context;
    };
    /**
     * Sets the context property value. 
     * @param value Value to set for the context property.
     */
    public set context(value: number | undefined) {
        this._context = value;
    };
    /**
     * Gets the contextEntity property value. 
     * @returns a entity
     */
    public get contextEntity() {
        return this._contextEntity;
    };
    /**
     * Sets the contextEntity property value. 
     * @param value Value to set for the ContextEntity property.
     */
    public set contextEntity(value: Entity | undefined) {
        this._contextEntity = value;
    };
    /**
     * Gets the contextvalue property value. 
     * @returns a string
     */
    public get contextvalue() {
        return this._contextvalue;
    };
    /**
     * Sets the contextvalue property value. 
     * @param value Value to set for the contextvalue property.
     */
    public set contextvalue(value: string | undefined) {
        this._contextvalue = value;
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
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
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * Gets the fonticon property value. 
     * @returns a string
     */
    public get fonticon() {
        return this._fonticon;
    };
    /**
     * Sets the fonticon property value. 
     * @param value Value to set for the fonticon property.
     */
    public set fonticon(value: string | undefined) {
        this._fonticon = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_appmoduleid_value": (o, n) => { (o as unknown as Appaction)._appmoduleid_value = n.getStringValue(); },
            "_contextentity_value": (o, n) => { (o as unknown as Appaction)._contextentity_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Appaction)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Appaction)._createdonbehalfby_value = n.getStringValue(); },
            "_iconwebresourceid_value": (o, n) => { (o as unknown as Appaction)._iconwebresourceid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Appaction)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Appaction)._modifiedonbehalfby_value = n.getStringValue(); },
            "_onclickeventformulacomponentlibraryid_value": (o, n) => { (o as unknown as Appaction)._onclickeventformulacomponentlibraryid_value = n.getStringValue(); },
            "_onclickeventjavascriptwebresourceid_value": (o, n) => { (o as unknown as Appaction)._onclickeventjavascriptwebresourceid_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Appaction)._organizationid_value = n.getStringValue(); },
            "_visibilityformulacomponentlibraryid_value": (o, n) => { (o as unknown as Appaction)._visibilityformulacomponentlibraryid_value = n.getStringValue(); },
            "appaction_AsyncOperations": (o, n) => { (o as unknown as Appaction).appaction_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "appaction_BulkDeleteFailures": (o, n) => { (o as unknown as Appaction).appaction_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "appaction_MailboxTrackingFolders": (o, n) => { (o as unknown as Appaction).appaction_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "appaction_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Appaction).appaction_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "appaction_ProcessSession": (o, n) => { (o as unknown as Appaction).appaction_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "appaction_SyncErrors": (o, n) => { (o as unknown as Appaction).appaction_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "appactionid": (o, n) => { (o as unknown as Appaction).appactionid = n.getStringValue(); },
            "appModuleId": (o, n) => { (o as unknown as Appaction).appModuleId = n.getObjectValue<Appmodule>(createAppmoduleFromDiscriminatorValue); },
            "buttonaccessibilitytext": (o, n) => { (o as unknown as Appaction).buttonaccessibilitytext = n.getStringValue(); },
            "buttonlabeltext": (o, n) => { (o as unknown as Appaction).buttonlabeltext = n.getStringValue(); },
            "buttonsequencepriority": (o, n) => { (o as unknown as Appaction).buttonsequencepriority = n.getNumberValue(); },
            "buttontooltipdescription": (o, n) => { (o as unknown as Appaction).buttontooltipdescription = n.getStringValue(); },
            "buttontooltiptitle": (o, n) => { (o as unknown as Appaction).buttontooltiptitle = n.getStringValue(); },
            "clienttype": (o, n) => { (o as unknown as Appaction).clienttype = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Appaction).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Appaction).componentstate = n.getNumberValue(); },
            "context": (o, n) => { (o as unknown as Appaction).context = n.getNumberValue(); },
            "contextEntity": (o, n) => { (o as unknown as Appaction).contextEntity = n.getObjectValue<Entity>(createEntityFromDiscriminatorValue); },
            "contextvalue": (o, n) => { (o as unknown as Appaction).contextvalue = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Appaction).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Appaction).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Appaction).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "fonticon": (o, n) => { (o as unknown as Appaction).fonticon = n.getStringValue(); },
            "hidden": (o, n) => { (o as unknown as Appaction).hidden = n.getBooleanValue(); },
            "iconWebResourceId": (o, n) => { (o as unknown as Appaction).iconWebResourceId = n.getObjectValue<Webresource>(createWebresourceFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Appaction).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Appaction).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Appaction).ismanaged = n.getBooleanValue(); },
            "location": (o, n) => { (o as unknown as Appaction).location = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Appaction).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Appaction).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Appaction).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Appaction).name = n.getStringValue(); },
            "onclickeventformulacomponentlibrary": (o, n) => { (o as unknown as Appaction).onclickeventformulacomponentlibrary = n.getStringValue(); },
            "onClickEventFormulaComponentLibraryId": (o, n) => { (o as unknown as Appaction).onClickEventFormulaComponentLibraryId = n.getObjectValue<Canvasapp>(createCanvasappFromDiscriminatorValue); },
            "onclickeventformulacomponentname": (o, n) => { (o as unknown as Appaction).onclickeventformulacomponentname = n.getStringValue(); },
            "onclickeventformulafunctionname": (o, n) => { (o as unknown as Appaction).onclickeventformulafunctionname = n.getStringValue(); },
            "onclickeventjavascriptfunctionname": (o, n) => { (o as unknown as Appaction).onclickeventjavascriptfunctionname = n.getStringValue(); },
            "onclickeventjavascriptparameters": (o, n) => { (o as unknown as Appaction).onclickeventjavascriptparameters = n.getStringValue(); },
            "onClickEventJavaScriptWebResourceId": (o, n) => { (o as unknown as Appaction).onClickEventJavaScriptWebResourceId = n.getObjectValue<Webresource>(createWebresourceFromDiscriminatorValue); },
            "onclickeventtype": (o, n) => { (o as unknown as Appaction).onclickeventtype = n.getNumberValue(); },
            "organizationid": (o, n) => { (o as unknown as Appaction).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Appaction).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Appaction).overwritetime = n.getDateValue(); },
            "solutionid": (o, n) => { (o as unknown as Appaction).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Appaction).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Appaction).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Appaction).timezoneruleversionnumber = n.getNumberValue(); },
            "type": (o, n) => { (o as unknown as Appaction).type = n.getNumberValue(); },
            "uniquename": (o, n) => { (o as unknown as Appaction).uniquename = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Appaction).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Appaction).versionnumber = n.getNumberValue(); },
            "visibilityformulacomponentlibrary": (o, n) => { (o as unknown as Appaction).visibilityformulacomponentlibrary = n.getStringValue(); },
            "visibilityFormulaComponentLibraryId": (o, n) => { (o as unknown as Appaction).visibilityFormulaComponentLibraryId = n.getObjectValue<Canvasapp>(createCanvasappFromDiscriminatorValue); },
            "visibilityformulacomponentname": (o, n) => { (o as unknown as Appaction).visibilityformulacomponentname = n.getStringValue(); },
            "visibilityformulafunctionname": (o, n) => { (o as unknown as Appaction).visibilityformulafunctionname = n.getStringValue(); },
        };
    };
    /**
     * Gets the hidden property value. 
     * @returns a boolean
     */
    public get hidden() {
        return this._hidden;
    };
    /**
     * Sets the hidden property value. 
     * @param value Value to set for the hidden property.
     */
    public set hidden(value: boolean | undefined) {
        this._hidden = value;
    };
    /**
     * Gets the iconWebResourceId property value. 
     * @returns a webresource
     */
    public get iconWebResourceId() {
        return this._iconWebResourceId;
    };
    /**
     * Sets the iconWebResourceId property value. 
     * @param value Value to set for the IconWebResourceId property.
     */
    public set iconWebResourceId(value: Webresource | undefined) {
        this._iconWebResourceId = value;
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
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
     * Gets the location property value. 
     * @returns a integer
     */
    public get location() {
        return this._location;
    };
    /**
     * Sets the location property value. 
     * @param value Value to set for the location property.
     */
    public set location(value: number | undefined) {
        this._location = value;
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
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
     * Gets the onclickeventformulacomponentlibrary property value. 
     * @returns a string
     */
    public get onclickeventformulacomponentlibrary() {
        return this._onclickeventformulacomponentlibrary;
    };
    /**
     * Sets the onclickeventformulacomponentlibrary property value. 
     * @param value Value to set for the onclickeventformulacomponentlibrary property.
     */
    public set onclickeventformulacomponentlibrary(value: string | undefined) {
        this._onclickeventformulacomponentlibrary = value;
    };
    /**
     * Gets the onClickEventFormulaComponentLibraryId property value. 
     * @returns a canvasapp
     */
    public get onClickEventFormulaComponentLibraryId() {
        return this._onClickEventFormulaComponentLibraryId;
    };
    /**
     * Sets the onClickEventFormulaComponentLibraryId property value. 
     * @param value Value to set for the OnClickEventFormulaComponentLibraryId property.
     */
    public set onClickEventFormulaComponentLibraryId(value: Canvasapp | undefined) {
        this._onClickEventFormulaComponentLibraryId = value;
    };
    /**
     * Gets the onclickeventformulacomponentname property value. 
     * @returns a string
     */
    public get onclickeventformulacomponentname() {
        return this._onclickeventformulacomponentname;
    };
    /**
     * Sets the onclickeventformulacomponentname property value. 
     * @param value Value to set for the onclickeventformulacomponentname property.
     */
    public set onclickeventformulacomponentname(value: string | undefined) {
        this._onclickeventformulacomponentname = value;
    };
    /**
     * Gets the onclickeventformulafunctionname property value. 
     * @returns a string
     */
    public get onclickeventformulafunctionname() {
        return this._onclickeventformulafunctionname;
    };
    /**
     * Sets the onclickeventformulafunctionname property value. 
     * @param value Value to set for the onclickeventformulafunctionname property.
     */
    public set onclickeventformulafunctionname(value: string | undefined) {
        this._onclickeventformulafunctionname = value;
    };
    /**
     * Gets the onclickeventjavascriptfunctionname property value. 
     * @returns a string
     */
    public get onclickeventjavascriptfunctionname() {
        return this._onclickeventjavascriptfunctionname;
    };
    /**
     * Sets the onclickeventjavascriptfunctionname property value. 
     * @param value Value to set for the onclickeventjavascriptfunctionname property.
     */
    public set onclickeventjavascriptfunctionname(value: string | undefined) {
        this._onclickeventjavascriptfunctionname = value;
    };
    /**
     * Gets the onclickeventjavascriptparameters property value. 
     * @returns a string
     */
    public get onclickeventjavascriptparameters() {
        return this._onclickeventjavascriptparameters;
    };
    /**
     * Sets the onclickeventjavascriptparameters property value. 
     * @param value Value to set for the onclickeventjavascriptparameters property.
     */
    public set onclickeventjavascriptparameters(value: string | undefined) {
        this._onclickeventjavascriptparameters = value;
    };
    /**
     * Gets the onClickEventJavaScriptWebResourceId property value. 
     * @returns a webresource
     */
    public get onClickEventJavaScriptWebResourceId() {
        return this._onClickEventJavaScriptWebResourceId;
    };
    /**
     * Sets the onClickEventJavaScriptWebResourceId property value. 
     * @param value Value to set for the OnClickEventJavaScriptWebResourceId property.
     */
    public set onClickEventJavaScriptWebResourceId(value: Webresource | undefined) {
        this._onClickEventJavaScriptWebResourceId = value;
    };
    /**
     * Gets the onclickeventtype property value. 
     * @returns a integer
     */
    public get onclickeventtype() {
        return this._onclickeventtype;
    };
    /**
     * Sets the onclickeventtype property value. 
     * @param value Value to set for the onclickeventtype property.
     */
    public set onclickeventtype(value: number | undefined) {
        this._onclickeventtype = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_appmoduleid_value", this._appmoduleid_value);
        writer.writeStringValue("_contextentity_value", this._contextentity_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_iconwebresourceid_value", this._iconwebresourceid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_onclickeventformulacomponentlibraryid_value", this._onclickeventformulacomponentlibraryid_value);
        writer.writeStringValue("_onclickeventjavascriptwebresourceid_value", this._onclickeventjavascriptwebresourceid_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_visibilityformulacomponentlibraryid_value", this._visibilityformulacomponentlibraryid_value);
        writer.writeCollectionOfObjectValues<Asyncoperation>("appaction_AsyncOperations", this.appaction_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("appaction_BulkDeleteFailures", this.appaction_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("appaction_MailboxTrackingFolders", this.appaction_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("appaction_PrincipalObjectAttributeAccesses", this.appaction_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("appaction_ProcessSession", this.appaction_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("appaction_SyncErrors", this.appaction_SyncErrors);
        writer.writeStringValue("appactionid", this.appactionid);
        writer.writeObjectValue<Appmodule>("appModuleId", this.appModuleId);
        writer.writeStringValue("buttonaccessibilitytext", this.buttonaccessibilitytext);
        writer.writeStringValue("buttonlabeltext", this.buttonlabeltext);
        writer.writeNumberValue("buttonsequencepriority", this.buttonsequencepriority);
        writer.writeStringValue("buttontooltipdescription", this.buttontooltipdescription);
        writer.writeStringValue("buttontooltiptitle", this.buttontooltiptitle);
        writer.writeStringValue("clienttype", this.clienttype);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeNumberValue("context", this.context);
        writer.writeObjectValue<Entity>("contextEntity", this.contextEntity);
        writer.writeStringValue("contextvalue", this.contextvalue);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("fonticon", this.fonticon);
        writer.writeBooleanValue("hidden", this.hidden);
        writer.writeObjectValue<Webresource>("iconWebResourceId", this.iconWebResourceId);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeNumberValue("location", this.location);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("onclickeventformulacomponentlibrary", this.onclickeventformulacomponentlibrary);
        writer.writeObjectValue<Canvasapp>("onClickEventFormulaComponentLibraryId", this.onClickEventFormulaComponentLibraryId);
        writer.writeStringValue("onclickeventformulacomponentname", this.onclickeventformulacomponentname);
        writer.writeStringValue("onclickeventformulafunctionname", this.onclickeventformulafunctionname);
        writer.writeStringValue("onclickeventjavascriptfunctionname", this.onclickeventjavascriptfunctionname);
        writer.writeStringValue("onclickeventjavascriptparameters", this.onclickeventjavascriptparameters);
        writer.writeObjectValue<Webresource>("onClickEventJavaScriptWebResourceId", this.onClickEventJavaScriptWebResourceId);
        writer.writeNumberValue("onclickeventtype", this.onclickeventtype);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("type", this.type);
        writer.writeStringValue("uniquename", this.uniquename);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeStringValue("visibilityformulacomponentlibrary", this.visibilityformulacomponentlibrary);
        writer.writeObjectValue<Canvasapp>("visibilityFormulaComponentLibraryId", this.visibilityFormulaComponentLibraryId);
        writer.writeStringValue("visibilityformulacomponentname", this.visibilityformulacomponentname);
        writer.writeStringValue("visibilityformulafunctionname", this.visibilityformulafunctionname);
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
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the type property value. 
     * @returns a integer
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. 
     * @param value Value to set for the type property.
     */
    public set type(value: number | undefined) {
        this._type = value;
    };
    /**
     * Gets the uniquename property value. 
     * @returns a string
     */
    public get uniquename() {
        return this._uniquename;
    };
    /**
     * Sets the uniquename property value. 
     * @param value Value to set for the uniquename property.
     */
    public set uniquename(value: string | undefined) {
        this._uniquename = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
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
     * Gets the visibilityformulacomponentlibrary property value. 
     * @returns a string
     */
    public get visibilityformulacomponentlibrary() {
        return this._visibilityformulacomponentlibrary;
    };
    /**
     * Sets the visibilityformulacomponentlibrary property value. 
     * @param value Value to set for the visibilityformulacomponentlibrary property.
     */
    public set visibilityformulacomponentlibrary(value: string | undefined) {
        this._visibilityformulacomponentlibrary = value;
    };
    /**
     * Gets the visibilityFormulaComponentLibraryId property value. 
     * @returns a canvasapp
     */
    public get visibilityFormulaComponentLibraryId() {
        return this._visibilityFormulaComponentLibraryId;
    };
    /**
     * Sets the visibilityFormulaComponentLibraryId property value. 
     * @param value Value to set for the VisibilityFormulaComponentLibraryId property.
     */
    public set visibilityFormulaComponentLibraryId(value: Canvasapp | undefined) {
        this._visibilityFormulaComponentLibraryId = value;
    };
    /**
     * Gets the visibilityformulacomponentname property value. 
     * @returns a string
     */
    public get visibilityformulacomponentname() {
        return this._visibilityformulacomponentname;
    };
    /**
     * Sets the visibilityformulacomponentname property value. 
     * @param value Value to set for the visibilityformulacomponentname property.
     */
    public set visibilityformulacomponentname(value: string | undefined) {
        this._visibilityformulacomponentname = value;
    };
    /**
     * Gets the visibilityformulafunctionname property value. 
     * @returns a string
     */
    public get visibilityformulafunctionname() {
        return this._visibilityformulafunctionname;
    };
    /**
     * Sets the visibilityformulafunctionname property value. 
     * @param value Value to set for the visibilityformulafunctionname property.
     */
    public set visibilityformulafunctionname(value: string | undefined) {
        this._visibilityformulafunctionname = value;
    };
}
