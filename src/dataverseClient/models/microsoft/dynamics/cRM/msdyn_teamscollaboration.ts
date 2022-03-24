import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_teamscollaboration extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_appid?: string | undefined;
    private _msdyn_channelfolderrelativeurl?: string | undefined;
    private _msdyn_channelid?: string | undefined;
    private _msdyn_channelname?: string | undefined;
    private _msdyn_channeltype?: string | undefined;
    private _msdyn_contenturl?: string | undefined;
    private _msdyn_groupid?: string | undefined;
    private _msdyn_pipedentityid?: string | undefined;
    private _msdyn_teamid?: string | undefined;
    private _msdyn_teamname?: string | undefined;
    private _msdyn_teamscollaboration_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_teamscollaboration_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_teamscollaboration_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_teamscollaboration_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_teamscollaboration_ProcessSession?: Processsession[] | undefined;
    private _msdyn_teamscollaboration_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_teamscollaborationid?: string | undefined;
    private _msdyn_teamsiteurl?: string | undefined;
    private _msdyn_tenantid?: string | undefined;
    private _msdyn_weburl?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _regardingobjectid?: string | undefined;
    private _regardingobjecttypecode?: number | undefined;
    private _regardingobjecttypename?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
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
     * Instantiates a new msdyn_teamscollaboration and sets the default values.
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_teamscollaboration)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_teamscollaboration)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_teamscollaboration)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_teamscollaboration)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_teamscollaboration)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_teamscollaboration).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_teamscollaboration).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_teamscollaboration).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_teamscollaboration).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_teamscollaboration).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_teamscollaboration).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_teamscollaboration).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_appid": (o, n) => { (o as unknown as Msdyn_teamscollaboration).msdyn_appid = n.getStringValue(); },
            "msdyn_channelfolderrelativeurl": (o, n) => { (o as unknown as Msdyn_teamscollaboration).msdyn_channelfolderrelativeurl = n.getStringValue(); },
            "msdyn_channelid": (o, n) => { (o as unknown as Msdyn_teamscollaboration).msdyn_channelid = n.getStringValue(); },
            "msdyn_channelname": (o, n) => { (o as unknown as Msdyn_teamscollaboration).msdyn_channelname = n.getStringValue(); },
            "msdyn_channeltype": (o, n) => { (o as unknown as Msdyn_teamscollaboration).msdyn_channeltype = n.getStringValue(); },
            "msdyn_contenturl": (o, n) => { (o as unknown as Msdyn_teamscollaboration).msdyn_contenturl = n.getStringValue(); },
            "msdyn_groupid": (o, n) => { (o as unknown as Msdyn_teamscollaboration).msdyn_groupid = n.getStringValue(); },
            "msdyn_pipedentityid": (o, n) => { (o as unknown as Msdyn_teamscollaboration).msdyn_pipedentityid = n.getStringValue(); },
            "msdyn_teamid": (o, n) => { (o as unknown as Msdyn_teamscollaboration).msdyn_teamid = n.getStringValue(); },
            "msdyn_teamname": (o, n) => { (o as unknown as Msdyn_teamscollaboration).msdyn_teamname = n.getStringValue(); },
            "msdyn_teamscollaboration_AsyncOperations": (o, n) => { (o as unknown as Msdyn_teamscollaboration).msdyn_teamscollaboration_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_teamscollaboration_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_teamscollaboration).msdyn_teamscollaboration_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_teamscollaboration_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_teamscollaboration).msdyn_teamscollaboration_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_teamscollaboration_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_teamscollaboration).msdyn_teamscollaboration_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_teamscollaboration_ProcessSession": (o, n) => { (o as unknown as Msdyn_teamscollaboration).msdyn_teamscollaboration_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_teamscollaboration_SyncErrors": (o, n) => { (o as unknown as Msdyn_teamscollaboration).msdyn_teamscollaboration_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_teamscollaborationid": (o, n) => { (o as unknown as Msdyn_teamscollaboration).msdyn_teamscollaborationid = n.getStringValue(); },
            "msdyn_teamsiteurl": (o, n) => { (o as unknown as Msdyn_teamscollaboration).msdyn_teamsiteurl = n.getStringValue(); },
            "msdyn_tenantid": (o, n) => { (o as unknown as Msdyn_teamscollaboration).msdyn_tenantid = n.getStringValue(); },
            "msdyn_weburl": (o, n) => { (o as unknown as Msdyn_teamscollaboration).msdyn_weburl = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_teamscollaboration).overriddencreatedon = n.getDateValue(); },
            "regardingobjectid": (o, n) => { (o as unknown as Msdyn_teamscollaboration).regardingobjectid = n.getStringValue(); },
            "regardingobjecttypecode": (o, n) => { (o as unknown as Msdyn_teamscollaboration).regardingobjecttypecode = n.getNumberValue(); },
            "regardingobjecttypename": (o, n) => { (o as unknown as Msdyn_teamscollaboration).regardingobjecttypename = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_teamscollaboration).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_teamscollaboration).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_teamscollaboration).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_teamscollaboration).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_teamscollaboration).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_appid property value. 
     * @returns a string
     */
    public get msdyn_appid() {
        return this._msdyn_appid;
    };
    /**
     * Sets the msdyn_appid property value. 
     * @param value Value to set for the msdyn_appid property.
     */
    public set msdyn_appid(value: string | undefined) {
        this._msdyn_appid = value;
    };
    /**
     * Gets the msdyn_channelfolderrelativeurl property value. 
     * @returns a string
     */
    public get msdyn_channelfolderrelativeurl() {
        return this._msdyn_channelfolderrelativeurl;
    };
    /**
     * Sets the msdyn_channelfolderrelativeurl property value. 
     * @param value Value to set for the msdyn_channelfolderrelativeurl property.
     */
    public set msdyn_channelfolderrelativeurl(value: string | undefined) {
        this._msdyn_channelfolderrelativeurl = value;
    };
    /**
     * Gets the msdyn_channelid property value. 
     * @returns a string
     */
    public get msdyn_channelid() {
        return this._msdyn_channelid;
    };
    /**
     * Sets the msdyn_channelid property value. 
     * @param value Value to set for the msdyn_channelid property.
     */
    public set msdyn_channelid(value: string | undefined) {
        this._msdyn_channelid = value;
    };
    /**
     * Gets the msdyn_channelname property value. 
     * @returns a string
     */
    public get msdyn_channelname() {
        return this._msdyn_channelname;
    };
    /**
     * Sets the msdyn_channelname property value. 
     * @param value Value to set for the msdyn_channelname property.
     */
    public set msdyn_channelname(value: string | undefined) {
        this._msdyn_channelname = value;
    };
    /**
     * Gets the msdyn_channeltype property value. 
     * @returns a string
     */
    public get msdyn_channeltype() {
        return this._msdyn_channeltype;
    };
    /**
     * Sets the msdyn_channeltype property value. 
     * @param value Value to set for the msdyn_channeltype property.
     */
    public set msdyn_channeltype(value: string | undefined) {
        this._msdyn_channeltype = value;
    };
    /**
     * Gets the msdyn_contenturl property value. 
     * @returns a string
     */
    public get msdyn_contenturl() {
        return this._msdyn_contenturl;
    };
    /**
     * Sets the msdyn_contenturl property value. 
     * @param value Value to set for the msdyn_contenturl property.
     */
    public set msdyn_contenturl(value: string | undefined) {
        this._msdyn_contenturl = value;
    };
    /**
     * Gets the msdyn_groupid property value. 
     * @returns a string
     */
    public get msdyn_groupid() {
        return this._msdyn_groupid;
    };
    /**
     * Sets the msdyn_groupid property value. 
     * @param value Value to set for the msdyn_groupid property.
     */
    public set msdyn_groupid(value: string | undefined) {
        this._msdyn_groupid = value;
    };
    /**
     * Gets the msdyn_pipedentityid property value. 
     * @returns a string
     */
    public get msdyn_pipedentityid() {
        return this._msdyn_pipedentityid;
    };
    /**
     * Sets the msdyn_pipedentityid property value. 
     * @param value Value to set for the msdyn_pipedentityid property.
     */
    public set msdyn_pipedentityid(value: string | undefined) {
        this._msdyn_pipedentityid = value;
    };
    /**
     * Gets the msdyn_teamid property value. 
     * @returns a string
     */
    public get msdyn_teamid() {
        return this._msdyn_teamid;
    };
    /**
     * Sets the msdyn_teamid property value. 
     * @param value Value to set for the msdyn_teamid property.
     */
    public set msdyn_teamid(value: string | undefined) {
        this._msdyn_teamid = value;
    };
    /**
     * Gets the msdyn_teamname property value. 
     * @returns a string
     */
    public get msdyn_teamname() {
        return this._msdyn_teamname;
    };
    /**
     * Sets the msdyn_teamname property value. 
     * @param value Value to set for the msdyn_teamname property.
     */
    public set msdyn_teamname(value: string | undefined) {
        this._msdyn_teamname = value;
    };
    /**
     * Gets the msdyn_teamscollaboration_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_teamscollaboration_AsyncOperations() {
        return this._msdyn_teamscollaboration_AsyncOperations;
    };
    /**
     * Sets the msdyn_teamscollaboration_AsyncOperations property value. 
     * @param value Value to set for the msdyn_teamscollaboration_AsyncOperations property.
     */
    public set msdyn_teamscollaboration_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_teamscollaboration_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_teamscollaboration_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_teamscollaboration_BulkDeleteFailures() {
        return this._msdyn_teamscollaboration_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_teamscollaboration_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_teamscollaboration_BulkDeleteFailures property.
     */
    public set msdyn_teamscollaboration_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_teamscollaboration_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_teamscollaboration_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_teamscollaboration_MailboxTrackingFolders() {
        return this._msdyn_teamscollaboration_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_teamscollaboration_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_teamscollaboration_MailboxTrackingFolders property.
     */
    public set msdyn_teamscollaboration_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_teamscollaboration_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_teamscollaboration_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_teamscollaboration_PrincipalObjectAttributeAccesses() {
        return this._msdyn_teamscollaboration_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_teamscollaboration_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_teamscollaboration_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_teamscollaboration_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_teamscollaboration_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_teamscollaboration_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_teamscollaboration_ProcessSession() {
        return this._msdyn_teamscollaboration_ProcessSession;
    };
    /**
     * Sets the msdyn_teamscollaboration_ProcessSession property value. 
     * @param value Value to set for the msdyn_teamscollaboration_ProcessSession property.
     */
    public set msdyn_teamscollaboration_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_teamscollaboration_ProcessSession = value;
    };
    /**
     * Gets the msdyn_teamscollaboration_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_teamscollaboration_SyncErrors() {
        return this._msdyn_teamscollaboration_SyncErrors;
    };
    /**
     * Sets the msdyn_teamscollaboration_SyncErrors property value. 
     * @param value Value to set for the msdyn_teamscollaboration_SyncErrors property.
     */
    public set msdyn_teamscollaboration_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_teamscollaboration_SyncErrors = value;
    };
    /**
     * Gets the msdyn_teamscollaborationid property value. 
     * @returns a string
     */
    public get msdyn_teamscollaborationid() {
        return this._msdyn_teamscollaborationid;
    };
    /**
     * Sets the msdyn_teamscollaborationid property value. 
     * @param value Value to set for the msdyn_teamscollaborationid property.
     */
    public set msdyn_teamscollaborationid(value: string | undefined) {
        this._msdyn_teamscollaborationid = value;
    };
    /**
     * Gets the msdyn_teamsiteurl property value. 
     * @returns a string
     */
    public get msdyn_teamsiteurl() {
        return this._msdyn_teamsiteurl;
    };
    /**
     * Sets the msdyn_teamsiteurl property value. 
     * @param value Value to set for the msdyn_teamsiteurl property.
     */
    public set msdyn_teamsiteurl(value: string | undefined) {
        this._msdyn_teamsiteurl = value;
    };
    /**
     * Gets the msdyn_tenantid property value. 
     * @returns a string
     */
    public get msdyn_tenantid() {
        return this._msdyn_tenantid;
    };
    /**
     * Sets the msdyn_tenantid property value. 
     * @param value Value to set for the msdyn_tenantid property.
     */
    public set msdyn_tenantid(value: string | undefined) {
        this._msdyn_tenantid = value;
    };
    /**
     * Gets the msdyn_weburl property value. 
     * @returns a string
     */
    public get msdyn_weburl() {
        return this._msdyn_weburl;
    };
    /**
     * Sets the msdyn_weburl property value. 
     * @param value Value to set for the msdyn_weburl property.
     */
    public set msdyn_weburl(value: string | undefined) {
        this._msdyn_weburl = value;
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
     * Gets the regardingobjectid property value. 
     * @returns a string
     */
    public get regardingobjectid() {
        return this._regardingobjectid;
    };
    /**
     * Sets the regardingobjectid property value. 
     * @param value Value to set for the regardingobjectid property.
     */
    public set regardingobjectid(value: string | undefined) {
        this._regardingobjectid = value;
    };
    /**
     * Gets the regardingobjecttypecode property value. 
     * @returns a integer
     */
    public get regardingobjecttypecode() {
        return this._regardingobjecttypecode;
    };
    /**
     * Sets the regardingobjecttypecode property value. 
     * @param value Value to set for the regardingobjecttypecode property.
     */
    public set regardingobjecttypecode(value: number | undefined) {
        this._regardingobjecttypecode = value;
    };
    /**
     * Gets the regardingobjecttypename property value. 
     * @returns a string
     */
    public get regardingobjecttypename() {
        return this._regardingobjecttypename;
    };
    /**
     * Sets the regardingobjecttypename property value. 
     * @param value Value to set for the regardingobjecttypename property.
     */
    public set regardingobjecttypename(value: string | undefined) {
        this._regardingobjecttypename = value;
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
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_appid", this.msdyn_appid);
        writer.writeStringValue("msdyn_channelfolderrelativeurl", this.msdyn_channelfolderrelativeurl);
        writer.writeStringValue("msdyn_channelid", this.msdyn_channelid);
        writer.writeStringValue("msdyn_channelname", this.msdyn_channelname);
        writer.writeStringValue("msdyn_channeltype", this.msdyn_channeltype);
        writer.writeStringValue("msdyn_contenturl", this.msdyn_contenturl);
        writer.writeStringValue("msdyn_groupid", this.msdyn_groupid);
        writer.writeStringValue("msdyn_pipedentityid", this.msdyn_pipedentityid);
        writer.writeStringValue("msdyn_teamid", this.msdyn_teamid);
        writer.writeStringValue("msdyn_teamname", this.msdyn_teamname);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_teamscollaboration_AsyncOperations", this.msdyn_teamscollaboration_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_teamscollaboration_BulkDeleteFailures", this.msdyn_teamscollaboration_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_teamscollaboration_MailboxTrackingFolders", this.msdyn_teamscollaboration_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_teamscollaboration_PrincipalObjectAttributeAccesses", this.msdyn_teamscollaboration_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_teamscollaboration_ProcessSession", this.msdyn_teamscollaboration_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_teamscollaboration_SyncErrors", this.msdyn_teamscollaboration_SyncErrors);
        writer.writeStringValue("msdyn_teamscollaborationid", this.msdyn_teamscollaborationid);
        writer.writeStringValue("msdyn_teamsiteurl", this.msdyn_teamsiteurl);
        writer.writeStringValue("msdyn_tenantid", this.msdyn_tenantid);
        writer.writeStringValue("msdyn_weburl", this.msdyn_weburl);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeStringValue("regardingobjectid", this.regardingobjectid);
        writer.writeNumberValue("regardingobjecttypecode", this.regardingobjecttypecode);
        writer.writeStringValue("regardingobjecttypename", this.regardingobjecttypename);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
}
