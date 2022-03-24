import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_postconfigFromDiscriminatorValue} from './createMsdyn_postconfigFromDiscriminatorValue';
import {createMsdyn_wallsavedqueryusersettingsFromDiscriminatorValue} from './createMsdyn_wallsavedqueryusersettingsFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Msdyn_postconfig, Msdyn_wallsavedqueryusersettings, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_wallsavedquery extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_postconfigurationid_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_entitydisplayname?: string | undefined;
    private _msdyn_entityname?: string | undefined;
    private _msdyn_isvirtual?: boolean | undefined;
    private _msdyn_isvisible?: boolean | undefined;
    private _msdyn_isvisiblebit?: number | undefined;
    private _msdyn_otc?: number | undefined;
    private _msdyn_postconfigurationid?: Msdyn_postconfig | undefined;
    private _msdyn_savedqueryid?: string | undefined;
    private _msdyn_savedqueryname?: string | undefined;
    private _msdyn_wallsavedquery_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_wallsavedquery_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_wallsavedquery_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_wallsavedquery_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_wallsavedquery_ProcessSession?: Processsession[] | undefined;
    private _msdyn_wallsavedquery_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_wallsavedquery_wallsavedqueryusersettings?: Msdyn_wallsavedqueryusersettings[] | undefined;
    private _msdyn_wallsavedqueryid?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
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
     * Gets the _msdyn_postconfigurationid_value property value. 
     * @returns a string
     */
    public get _msdyn_postconfigurationid_value() {
        return this.__msdyn_postconfigurationid_value;
    };
    /**
     * Sets the _msdyn_postconfigurationid_value property value. 
     * @param value Value to set for the _msdyn_postconfigurationid_value property.
     */
    public set _msdyn_postconfigurationid_value(value: string | undefined) {
        this.__msdyn_postconfigurationid_value = value;
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
     * Instantiates a new msdyn_wallsavedquery and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_wallsavedquery)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_wallsavedquery)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_wallsavedquery)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_wallsavedquery)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_postconfigurationid_value": (o, n) => { (o as unknown as Msdyn_wallsavedquery)._msdyn_postconfigurationid_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_wallsavedquery)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_wallsavedquery).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_wallsavedquery).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_wallsavedquery).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_wallsavedquery).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_wallsavedquery).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_wallsavedquery).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_wallsavedquery).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_entitydisplayname": (o, n) => { (o as unknown as Msdyn_wallsavedquery).msdyn_entitydisplayname = n.getStringValue(); },
            "msdyn_entityname": (o, n) => { (o as unknown as Msdyn_wallsavedquery).msdyn_entityname = n.getStringValue(); },
            "msdyn_isvirtual": (o, n) => { (o as unknown as Msdyn_wallsavedquery).msdyn_isvirtual = n.getBooleanValue(); },
            "msdyn_isvisible": (o, n) => { (o as unknown as Msdyn_wallsavedquery).msdyn_isvisible = n.getBooleanValue(); },
            "msdyn_isvisiblebit": (o, n) => { (o as unknown as Msdyn_wallsavedquery).msdyn_isvisiblebit = n.getNumberValue(); },
            "msdyn_otc": (o, n) => { (o as unknown as Msdyn_wallsavedquery).msdyn_otc = n.getNumberValue(); },
            "msdyn_postconfigurationid": (o, n) => { (o as unknown as Msdyn_wallsavedquery).msdyn_postconfigurationid = n.getObjectValue<Msdyn_postconfig>(createMsdyn_postconfigFromDiscriminatorValue); },
            "msdyn_savedqueryid": (o, n) => { (o as unknown as Msdyn_wallsavedquery).msdyn_savedqueryid = n.getStringValue(); },
            "msdyn_savedqueryname": (o, n) => { (o as unknown as Msdyn_wallsavedquery).msdyn_savedqueryname = n.getStringValue(); },
            "msdyn_wallsavedquery_AsyncOperations": (o, n) => { (o as unknown as Msdyn_wallsavedquery).msdyn_wallsavedquery_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_wallsavedquery_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_wallsavedquery).msdyn_wallsavedquery_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_wallsavedquery_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_wallsavedquery).msdyn_wallsavedquery_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_wallsavedquery_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_wallsavedquery).msdyn_wallsavedquery_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_wallsavedquery_ProcessSession": (o, n) => { (o as unknown as Msdyn_wallsavedquery).msdyn_wallsavedquery_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_wallsavedquery_SyncErrors": (o, n) => { (o as unknown as Msdyn_wallsavedquery).msdyn_wallsavedquery_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_wallsavedquery_wallsavedqueryusersettings": (o, n) => { (o as unknown as Msdyn_wallsavedquery).msdyn_wallsavedquery_wallsavedqueryusersettings = n.getCollectionOfObjectValues<Msdyn_wallsavedqueryusersettings>(createMsdyn_wallsavedqueryusersettingsFromDiscriminatorValue); },
            "msdyn_wallsavedqueryid": (o, n) => { (o as unknown as Msdyn_wallsavedquery).msdyn_wallsavedqueryid = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_wallsavedquery).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_wallsavedquery).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_wallsavedquery).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_wallsavedquery).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_wallsavedquery).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_wallsavedquery).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_wallsavedquery).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_entitydisplayname property value. 
     * @returns a string
     */
    public get msdyn_entitydisplayname() {
        return this._msdyn_entitydisplayname;
    };
    /**
     * Sets the msdyn_entitydisplayname property value. 
     * @param value Value to set for the msdyn_entitydisplayname property.
     */
    public set msdyn_entitydisplayname(value: string | undefined) {
        this._msdyn_entitydisplayname = value;
    };
    /**
     * Gets the msdyn_entityname property value. 
     * @returns a string
     */
    public get msdyn_entityname() {
        return this._msdyn_entityname;
    };
    /**
     * Sets the msdyn_entityname property value. 
     * @param value Value to set for the msdyn_entityname property.
     */
    public set msdyn_entityname(value: string | undefined) {
        this._msdyn_entityname = value;
    };
    /**
     * Gets the msdyn_isvirtual property value. 
     * @returns a boolean
     */
    public get msdyn_isvirtual() {
        return this._msdyn_isvirtual;
    };
    /**
     * Sets the msdyn_isvirtual property value. 
     * @param value Value to set for the msdyn_isvirtual property.
     */
    public set msdyn_isvirtual(value: boolean | undefined) {
        this._msdyn_isvirtual = value;
    };
    /**
     * Gets the msdyn_isvisible property value. 
     * @returns a boolean
     */
    public get msdyn_isvisible() {
        return this._msdyn_isvisible;
    };
    /**
     * Sets the msdyn_isvisible property value. 
     * @param value Value to set for the msdyn_isvisible property.
     */
    public set msdyn_isvisible(value: boolean | undefined) {
        this._msdyn_isvisible = value;
    };
    /**
     * Gets the msdyn_isvisiblebit property value. 
     * @returns a integer
     */
    public get msdyn_isvisiblebit() {
        return this._msdyn_isvisiblebit;
    };
    /**
     * Sets the msdyn_isvisiblebit property value. 
     * @param value Value to set for the msdyn_isvisiblebit property.
     */
    public set msdyn_isvisiblebit(value: number | undefined) {
        this._msdyn_isvisiblebit = value;
    };
    /**
     * Gets the msdyn_otc property value. 
     * @returns a integer
     */
    public get msdyn_otc() {
        return this._msdyn_otc;
    };
    /**
     * Sets the msdyn_otc property value. 
     * @param value Value to set for the msdyn_otc property.
     */
    public set msdyn_otc(value: number | undefined) {
        this._msdyn_otc = value;
    };
    /**
     * Gets the msdyn_postconfigurationid property value. 
     * @returns a msdyn_postconfig
     */
    public get msdyn_postconfigurationid() {
        return this._msdyn_postconfigurationid;
    };
    /**
     * Sets the msdyn_postconfigurationid property value. 
     * @param value Value to set for the msdyn_postconfigurationid property.
     */
    public set msdyn_postconfigurationid(value: Msdyn_postconfig | undefined) {
        this._msdyn_postconfigurationid = value;
    };
    /**
     * Gets the msdyn_savedqueryid property value. 
     * @returns a string
     */
    public get msdyn_savedqueryid() {
        return this._msdyn_savedqueryid;
    };
    /**
     * Sets the msdyn_savedqueryid property value. 
     * @param value Value to set for the msdyn_savedqueryid property.
     */
    public set msdyn_savedqueryid(value: string | undefined) {
        this._msdyn_savedqueryid = value;
    };
    /**
     * Gets the msdyn_savedqueryname property value. 
     * @returns a string
     */
    public get msdyn_savedqueryname() {
        return this._msdyn_savedqueryname;
    };
    /**
     * Sets the msdyn_savedqueryname property value. 
     * @param value Value to set for the msdyn_savedqueryname property.
     */
    public set msdyn_savedqueryname(value: string | undefined) {
        this._msdyn_savedqueryname = value;
    };
    /**
     * Gets the msdyn_wallsavedquery_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_wallsavedquery_AsyncOperations() {
        return this._msdyn_wallsavedquery_AsyncOperations;
    };
    /**
     * Sets the msdyn_wallsavedquery_AsyncOperations property value. 
     * @param value Value to set for the msdyn_wallsavedquery_AsyncOperations property.
     */
    public set msdyn_wallsavedquery_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_wallsavedquery_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_wallsavedquery_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_wallsavedquery_BulkDeleteFailures() {
        return this._msdyn_wallsavedquery_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_wallsavedquery_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_wallsavedquery_BulkDeleteFailures property.
     */
    public set msdyn_wallsavedquery_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_wallsavedquery_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_wallsavedquery_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_wallsavedquery_MailboxTrackingFolders() {
        return this._msdyn_wallsavedquery_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_wallsavedquery_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_wallsavedquery_MailboxTrackingFolders property.
     */
    public set msdyn_wallsavedquery_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_wallsavedquery_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_wallsavedquery_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_wallsavedquery_PrincipalObjectAttributeAccesses() {
        return this._msdyn_wallsavedquery_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_wallsavedquery_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_wallsavedquery_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_wallsavedquery_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_wallsavedquery_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_wallsavedquery_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_wallsavedquery_ProcessSession() {
        return this._msdyn_wallsavedquery_ProcessSession;
    };
    /**
     * Sets the msdyn_wallsavedquery_ProcessSession property value. 
     * @param value Value to set for the msdyn_wallsavedquery_ProcessSession property.
     */
    public set msdyn_wallsavedquery_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_wallsavedquery_ProcessSession = value;
    };
    /**
     * Gets the msdyn_wallsavedquery_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_wallsavedquery_SyncErrors() {
        return this._msdyn_wallsavedquery_SyncErrors;
    };
    /**
     * Sets the msdyn_wallsavedquery_SyncErrors property value. 
     * @param value Value to set for the msdyn_wallsavedquery_SyncErrors property.
     */
    public set msdyn_wallsavedquery_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_wallsavedquery_SyncErrors = value;
    };
    /**
     * Gets the msdyn_wallsavedquery_wallsavedqueryusersettings property value. 
     * @returns a msdyn_wallsavedqueryusersettings
     */
    public get msdyn_wallsavedquery_wallsavedqueryusersettings() {
        return this._msdyn_wallsavedquery_wallsavedqueryusersettings;
    };
    /**
     * Sets the msdyn_wallsavedquery_wallsavedqueryusersettings property value. 
     * @param value Value to set for the msdyn_wallsavedquery_wallsavedqueryusersettings property.
     */
    public set msdyn_wallsavedquery_wallsavedqueryusersettings(value: Msdyn_wallsavedqueryusersettings[] | undefined) {
        this._msdyn_wallsavedquery_wallsavedqueryusersettings = value;
    };
    /**
     * Gets the msdyn_wallsavedqueryid property value. 
     * @returns a string
     */
    public get msdyn_wallsavedqueryid() {
        return this._msdyn_wallsavedqueryid;
    };
    /**
     * Sets the msdyn_wallsavedqueryid property value. 
     * @param value Value to set for the msdyn_wallsavedqueryid property.
     */
    public set msdyn_wallsavedqueryid(value: string | undefined) {
        this._msdyn_wallsavedqueryid = value;
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
        writer.writeStringValue("_msdyn_postconfigurationid_value", this._msdyn_postconfigurationid_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_entitydisplayname", this.msdyn_entitydisplayname);
        writer.writeStringValue("msdyn_entityname", this.msdyn_entityname);
        writer.writeBooleanValue("msdyn_isvirtual", this.msdyn_isvirtual);
        writer.writeBooleanValue("msdyn_isvisible", this.msdyn_isvisible);
        writer.writeNumberValue("msdyn_isvisiblebit", this.msdyn_isvisiblebit);
        writer.writeNumberValue("msdyn_otc", this.msdyn_otc);
        writer.writeObjectValue<Msdyn_postconfig>("msdyn_postconfigurationid", this.msdyn_postconfigurationid);
        writer.writeStringValue("msdyn_savedqueryid", this.msdyn_savedqueryid);
        writer.writeStringValue("msdyn_savedqueryname", this.msdyn_savedqueryname);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_wallsavedquery_AsyncOperations", this.msdyn_wallsavedquery_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_wallsavedquery_BulkDeleteFailures", this.msdyn_wallsavedquery_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_wallsavedquery_MailboxTrackingFolders", this.msdyn_wallsavedquery_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_wallsavedquery_PrincipalObjectAttributeAccesses", this.msdyn_wallsavedquery_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_wallsavedquery_ProcessSession", this.msdyn_wallsavedquery_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_wallsavedquery_SyncErrors", this.msdyn_wallsavedquery_SyncErrors);
        writer.writeCollectionOfObjectValues<Msdyn_wallsavedqueryusersettings>("msdyn_wallsavedquery_wallsavedqueryusersettings", this.msdyn_wallsavedquery_wallsavedqueryusersettings);
        writer.writeStringValue("msdyn_wallsavedqueryid", this.msdyn_wallsavedqueryid);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
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
