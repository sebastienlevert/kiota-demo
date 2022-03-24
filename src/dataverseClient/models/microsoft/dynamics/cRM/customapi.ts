import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createCatalogassignmentFromDiscriminatorValue} from './createCatalogassignmentFromDiscriminatorValue';
import {createCustomapirequestparameterFromDiscriminatorValue} from './createCustomapirequestparameterFromDiscriminatorValue';
import {createCustomapiresponsepropertyFromDiscriminatorValue} from './createCustomapiresponsepropertyFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPlugintypeFromDiscriminatorValue} from './createPlugintypeFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSdkmessageFromDiscriminatorValue} from './createSdkmessageFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Catalogassignment, Crmbaseentity, Customapirequestparameter, Customapiresponseproperty, Mailboxtrackingfolder, Plugintype, Principal, Principalobjectattributeaccess, Processsession, Sdkmessage, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Customapi extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __plugintypeid_value?: string | undefined;
    private __sdkmessageid_value?: string | undefined;
    private _allowedcustomprocessingsteptype?: number | undefined;
    private _bindingtype?: number | undefined;
    private _boundentitylogicalname?: string | undefined;
    private _catalogAssignments?: Catalogassignment[] | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _customapi_AsyncOperations?: Asyncoperation[] | undefined;
    private _customapi_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _customapi_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _customapi_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _customapi_ProcessSession?: Processsession[] | undefined;
    private _customapi_SyncErrors?: Syncerror[] | undefined;
    private _customapiid?: string | undefined;
    private _customAPIRequestParameters?: Customapirequestparameter[] | undefined;
    private _customAPIResponseProperties?: Customapiresponseproperty[] | undefined;
    private _description?: string | undefined;
    private _displayname?: string | undefined;
    private _executeprivilegename?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _isfunction?: boolean | undefined;
    private _ismanaged?: boolean | undefined;
    private _isprivate?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _pluginTypeId?: Plugintype | undefined;
    private _sdkMessageId?: Sdkmessage | undefined;
    private _solutionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _uniquename?: string | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    private _workflowsdkstepenabled?: boolean | undefined;
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
     * Gets the _plugintypeid_value property value. 
     * @returns a string
     */
    public get _plugintypeid_value() {
        return this.__plugintypeid_value;
    };
    /**
     * Sets the _plugintypeid_value property value. 
     * @param value Value to set for the _plugintypeid_value property.
     */
    public set _plugintypeid_value(value: string | undefined) {
        this.__plugintypeid_value = value;
    };
    /**
     * Gets the _sdkmessageid_value property value. 
     * @returns a string
     */
    public get _sdkmessageid_value() {
        return this.__sdkmessageid_value;
    };
    /**
     * Sets the _sdkmessageid_value property value. 
     * @param value Value to set for the _sdkmessageid_value property.
     */
    public set _sdkmessageid_value(value: string | undefined) {
        this.__sdkmessageid_value = value;
    };
    /**
     * Gets the allowedcustomprocessingsteptype property value. 
     * @returns a integer
     */
    public get allowedcustomprocessingsteptype() {
        return this._allowedcustomprocessingsteptype;
    };
    /**
     * Sets the allowedcustomprocessingsteptype property value. 
     * @param value Value to set for the allowedcustomprocessingsteptype property.
     */
    public set allowedcustomprocessingsteptype(value: number | undefined) {
        this._allowedcustomprocessingsteptype = value;
    };
    /**
     * Gets the bindingtype property value. 
     * @returns a integer
     */
    public get bindingtype() {
        return this._bindingtype;
    };
    /**
     * Sets the bindingtype property value. 
     * @param value Value to set for the bindingtype property.
     */
    public set bindingtype(value: number | undefined) {
        this._bindingtype = value;
    };
    /**
     * Gets the boundentitylogicalname property value. 
     * @returns a string
     */
    public get boundentitylogicalname() {
        return this._boundentitylogicalname;
    };
    /**
     * Sets the boundentitylogicalname property value. 
     * @param value Value to set for the boundentitylogicalname property.
     */
    public set boundentitylogicalname(value: string | undefined) {
        this._boundentitylogicalname = value;
    };
    /**
     * Gets the catalogAssignments property value. 
     * @returns a catalogassignment
     */
    public get catalogAssignments() {
        return this._catalogAssignments;
    };
    /**
     * Sets the catalogAssignments property value. 
     * @param value Value to set for the CatalogAssignments property.
     */
    public set catalogAssignments(value: Catalogassignment[] | undefined) {
        this._catalogAssignments = value;
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
     * Instantiates a new customapi and sets the default values.
     */
    public constructor() {
        super();
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
     * Gets the customapi_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get customapi_AsyncOperations() {
        return this._customapi_AsyncOperations;
    };
    /**
     * Sets the customapi_AsyncOperations property value. 
     * @param value Value to set for the customapi_AsyncOperations property.
     */
    public set customapi_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._customapi_AsyncOperations = value;
    };
    /**
     * Gets the customapi_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get customapi_BulkDeleteFailures() {
        return this._customapi_BulkDeleteFailures;
    };
    /**
     * Sets the customapi_BulkDeleteFailures property value. 
     * @param value Value to set for the customapi_BulkDeleteFailures property.
     */
    public set customapi_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._customapi_BulkDeleteFailures = value;
    };
    /**
     * Gets the customapi_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get customapi_MailboxTrackingFolders() {
        return this._customapi_MailboxTrackingFolders;
    };
    /**
     * Sets the customapi_MailboxTrackingFolders property value. 
     * @param value Value to set for the customapi_MailboxTrackingFolders property.
     */
    public set customapi_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._customapi_MailboxTrackingFolders = value;
    };
    /**
     * Gets the customapi_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get customapi_PrincipalObjectAttributeAccesses() {
        return this._customapi_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the customapi_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the customapi_PrincipalObjectAttributeAccesses property.
     */
    public set customapi_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._customapi_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the customapi_ProcessSession property value. 
     * @returns a processsession
     */
    public get customapi_ProcessSession() {
        return this._customapi_ProcessSession;
    };
    /**
     * Sets the customapi_ProcessSession property value. 
     * @param value Value to set for the customapi_ProcessSession property.
     */
    public set customapi_ProcessSession(value: Processsession[] | undefined) {
        this._customapi_ProcessSession = value;
    };
    /**
     * Gets the customapi_SyncErrors property value. 
     * @returns a syncerror
     */
    public get customapi_SyncErrors() {
        return this._customapi_SyncErrors;
    };
    /**
     * Sets the customapi_SyncErrors property value. 
     * @param value Value to set for the customapi_SyncErrors property.
     */
    public set customapi_SyncErrors(value: Syncerror[] | undefined) {
        this._customapi_SyncErrors = value;
    };
    /**
     * Gets the customapiid property value. 
     * @returns a string
     */
    public get customapiid() {
        return this._customapiid;
    };
    /**
     * Sets the customapiid property value. 
     * @param value Value to set for the customapiid property.
     */
    public set customapiid(value: string | undefined) {
        this._customapiid = value;
    };
    /**
     * Gets the customAPIRequestParameters property value. 
     * @returns a customapirequestparameter
     */
    public get customAPIRequestParameters() {
        return this._customAPIRequestParameters;
    };
    /**
     * Sets the customAPIRequestParameters property value. 
     * @param value Value to set for the CustomAPIRequestParameters property.
     */
    public set customAPIRequestParameters(value: Customapirequestparameter[] | undefined) {
        this._customAPIRequestParameters = value;
    };
    /**
     * Gets the customAPIResponseProperties property value. 
     * @returns a customapiresponseproperty
     */
    public get customAPIResponseProperties() {
        return this._customAPIResponseProperties;
    };
    /**
     * Sets the customAPIResponseProperties property value. 
     * @param value Value to set for the CustomAPIResponseProperties property.
     */
    public set customAPIResponseProperties(value: Customapiresponseproperty[] | undefined) {
        this._customAPIResponseProperties = value;
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
     * Gets the executeprivilegename property value. 
     * @returns a string
     */
    public get executeprivilegename() {
        return this._executeprivilegename;
    };
    /**
     * Sets the executeprivilegename property value. 
     * @param value Value to set for the executeprivilegename property.
     */
    public set executeprivilegename(value: string | undefined) {
        this._executeprivilegename = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Customapi)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Customapi)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Customapi)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Customapi)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Customapi)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Customapi)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Customapi)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Customapi)._owninguser_value = n.getStringValue(); },
            "_plugintypeid_value": (o, n) => { (o as unknown as Customapi)._plugintypeid_value = n.getStringValue(); },
            "_sdkmessageid_value": (o, n) => { (o as unknown as Customapi)._sdkmessageid_value = n.getStringValue(); },
            "allowedcustomprocessingsteptype": (o, n) => { (o as unknown as Customapi).allowedcustomprocessingsteptype = n.getNumberValue(); },
            "bindingtype": (o, n) => { (o as unknown as Customapi).bindingtype = n.getNumberValue(); },
            "boundentitylogicalname": (o, n) => { (o as unknown as Customapi).boundentitylogicalname = n.getStringValue(); },
            "catalogAssignments": (o, n) => { (o as unknown as Customapi).catalogAssignments = n.getCollectionOfObjectValues<Catalogassignment>(createCatalogassignmentFromDiscriminatorValue); },
            "componentidunique": (o, n) => { (o as unknown as Customapi).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Customapi).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Customapi).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Customapi).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Customapi).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "customapi_AsyncOperations": (o, n) => { (o as unknown as Customapi).customapi_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "customapi_BulkDeleteFailures": (o, n) => { (o as unknown as Customapi).customapi_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "customapi_MailboxTrackingFolders": (o, n) => { (o as unknown as Customapi).customapi_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "customapi_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Customapi).customapi_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "customapi_ProcessSession": (o, n) => { (o as unknown as Customapi).customapi_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "customapi_SyncErrors": (o, n) => { (o as unknown as Customapi).customapi_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "customapiid": (o, n) => { (o as unknown as Customapi).customapiid = n.getStringValue(); },
            "customAPIRequestParameters": (o, n) => { (o as unknown as Customapi).customAPIRequestParameters = n.getCollectionOfObjectValues<Customapirequestparameter>(createCustomapirequestparameterFromDiscriminatorValue); },
            "customAPIResponseProperties": (o, n) => { (o as unknown as Customapi).customAPIResponseProperties = n.getCollectionOfObjectValues<Customapiresponseproperty>(createCustomapiresponsepropertyFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Customapi).description = n.getStringValue(); },
            "displayname": (o, n) => { (o as unknown as Customapi).displayname = n.getStringValue(); },
            "executeprivilegename": (o, n) => { (o as unknown as Customapi).executeprivilegename = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Customapi).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Customapi).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "isfunction": (o, n) => { (o as unknown as Customapi).isfunction = n.getBooleanValue(); },
            "ismanaged": (o, n) => { (o as unknown as Customapi).ismanaged = n.getBooleanValue(); },
            "isprivate": (o, n) => { (o as unknown as Customapi).isprivate = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Customapi).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Customapi).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Customapi).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Customapi).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Customapi).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Customapi).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Customapi).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Customapi).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Customapi).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Customapi).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "pluginTypeId": (o, n) => { (o as unknown as Customapi).pluginTypeId = n.getObjectValue<Plugintype>(createPlugintypeFromDiscriminatorValue); },
            "sdkMessageId": (o, n) => { (o as unknown as Customapi).sdkMessageId = n.getObjectValue<Sdkmessage>(createSdkmessageFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Customapi).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Customapi).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Customapi).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Customapi).timezoneruleversionnumber = n.getNumberValue(); },
            "uniquename": (o, n) => { (o as unknown as Customapi).uniquename = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Customapi).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Customapi).versionnumber = n.getNumberValue(); },
            "workflowsdkstepenabled": (o, n) => { (o as unknown as Customapi).workflowsdkstepenabled = n.getBooleanValue(); },
        };
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
     * Gets the isfunction property value. 
     * @returns a boolean
     */
    public get isfunction() {
        return this._isfunction;
    };
    /**
     * Sets the isfunction property value. 
     * @param value Value to set for the isfunction property.
     */
    public set isfunction(value: boolean | undefined) {
        this._isfunction = value;
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
     * Gets the isprivate property value. 
     * @returns a boolean
     */
    public get isprivate() {
        return this._isprivate;
    };
    /**
     * Sets the isprivate property value. 
     * @param value Value to set for the isprivate property.
     */
    public set isprivate(value: boolean | undefined) {
        this._isprivate = value;
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
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
    };
    /**
     * Gets the pluginTypeId property value. 
     * @returns a plugintype
     */
    public get pluginTypeId() {
        return this._pluginTypeId;
    };
    /**
     * Sets the pluginTypeId property value. 
     * @param value Value to set for the PluginTypeId property.
     */
    public set pluginTypeId(value: Plugintype | undefined) {
        this._pluginTypeId = value;
    };
    /**
     * Gets the sdkMessageId property value. 
     * @returns a sdkmessage
     */
    public get sdkMessageId() {
        return this._sdkMessageId;
    };
    /**
     * Sets the sdkMessageId property value. 
     * @param value Value to set for the SdkMessageId property.
     */
    public set sdkMessageId(value: Sdkmessage | undefined) {
        this._sdkMessageId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_plugintypeid_value", this._plugintypeid_value);
        writer.writeStringValue("_sdkmessageid_value", this._sdkmessageid_value);
        writer.writeNumberValue("allowedcustomprocessingsteptype", this.allowedcustomprocessingsteptype);
        writer.writeNumberValue("bindingtype", this.bindingtype);
        writer.writeStringValue("boundentitylogicalname", this.boundentitylogicalname);
        writer.writeCollectionOfObjectValues<Catalogassignment>("catalogAssignments", this.catalogAssignments);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeCollectionOfObjectValues<Asyncoperation>("customapi_AsyncOperations", this.customapi_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("customapi_BulkDeleteFailures", this.customapi_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("customapi_MailboxTrackingFolders", this.customapi_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("customapi_PrincipalObjectAttributeAccesses", this.customapi_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("customapi_ProcessSession", this.customapi_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("customapi_SyncErrors", this.customapi_SyncErrors);
        writer.writeStringValue("customapiid", this.customapiid);
        writer.writeCollectionOfObjectValues<Customapirequestparameter>("customAPIRequestParameters", this.customAPIRequestParameters);
        writer.writeCollectionOfObjectValues<Customapiresponseproperty>("customAPIResponseProperties", this.customAPIResponseProperties);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayname", this.displayname);
        writer.writeStringValue("executeprivilegename", this.executeprivilegename);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("isfunction", this.isfunction);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeBooleanValue("isprivate", this.isprivate);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeObjectValue<Plugintype>("pluginTypeId", this.pluginTypeId);
        writer.writeObjectValue<Sdkmessage>("sdkMessageId", this.sdkMessageId);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("uniquename", this.uniquename);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeBooleanValue("workflowsdkstepenabled", this.workflowsdkstepenabled);
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
     * Gets the workflowsdkstepenabled property value. 
     * @returns a boolean
     */
    public get workflowsdkstepenabled() {
        return this._workflowsdkstepenabled;
    };
    /**
     * Sets the workflowsdkstepenabled property value. 
     * @param value Value to set for the workflowsdkstepenabled property.
     */
    public set workflowsdkstepenabled(value: boolean | undefined) {
        this._workflowsdkstepenabled = value;
    };
}
