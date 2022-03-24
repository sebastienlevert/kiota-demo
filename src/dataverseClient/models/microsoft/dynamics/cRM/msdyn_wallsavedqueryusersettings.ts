import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_wallsavedqueryFromDiscriminatorValue} from './createMsdyn_wallsavedqueryFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msdyn_wallsavedquery, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_wallsavedqueryusersettings extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_userid_value?: string | undefined;
    private __msdyn_wallsavedqueryid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_data?: string | undefined;
    private _msdyn_default?: number | undefined;
    private _msdyn_entitydisplayname?: string | undefined;
    private _msdyn_entityname?: string | undefined;
    private _msdyn_includewallinresponse?: boolean | undefined;
    private _msdyn_isfollowing?: boolean | undefined;
    private _msdyn_isvirtual?: boolean | undefined;
    private _msdyn_isvisible?: boolean | undefined;
    private _msdyn_isvisiblebit?: number | undefined;
    private _msdyn_otc?: number | undefined;
    private _msdyn_savedqueryname?: string | undefined;
    private _msdyn_sortorder?: number | undefined;
    private _msdyn_type?: number | undefined;
    private _msdyn_userid?: Systemuser | undefined;
    private _msdyn_wallsavedqueryid?: Msdyn_wallsavedquery | undefined;
    private _msdyn_wallsavedqueryusersettings_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_wallsavedqueryusersettings_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_wallsavedqueryusersettings_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_wallsavedqueryusersettings_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_wallsavedqueryusersettings_ProcessSession?: Processsession[] | undefined;
    private _msdyn_wallsavedqueryusersettings_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_wallsavedqueryusersettingsid?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
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
     * Gets the _msdyn_userid_value property value. 
     * @returns a string
     */
    public get _msdyn_userid_value() {
        return this.__msdyn_userid_value;
    };
    /**
     * Sets the _msdyn_userid_value property value. 
     * @param value Value to set for the _msdyn_userid_value property.
     */
    public set _msdyn_userid_value(value: string | undefined) {
        this.__msdyn_userid_value = value;
    };
    /**
     * Gets the _msdyn_wallsavedqueryid_value property value. 
     * @returns a string
     */
    public get _msdyn_wallsavedqueryid_value() {
        return this.__msdyn_wallsavedqueryid_value;
    };
    /**
     * Sets the _msdyn_wallsavedqueryid_value property value. 
     * @param value Value to set for the _msdyn_wallsavedqueryid_value property.
     */
    public set _msdyn_wallsavedqueryid_value(value: string | undefined) {
        this.__msdyn_wallsavedqueryid_value = value;
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
     * Instantiates a new msdyn_wallsavedqueryusersettings and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_userid_value": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings)._msdyn_userid_value = n.getStringValue(); },
            "_msdyn_wallsavedqueryid_value": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings)._msdyn_wallsavedqueryid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_data": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).msdyn_data = n.getStringValue(); },
            "msdyn_default": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).msdyn_default = n.getNumberValue(); },
            "msdyn_entitydisplayname": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).msdyn_entitydisplayname = n.getStringValue(); },
            "msdyn_entityname": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).msdyn_entityname = n.getStringValue(); },
            "msdyn_includewallinresponse": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).msdyn_includewallinresponse = n.getBooleanValue(); },
            "msdyn_isfollowing": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).msdyn_isfollowing = n.getBooleanValue(); },
            "msdyn_isvirtual": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).msdyn_isvirtual = n.getBooleanValue(); },
            "msdyn_isvisible": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).msdyn_isvisible = n.getBooleanValue(); },
            "msdyn_isvisiblebit": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).msdyn_isvisiblebit = n.getNumberValue(); },
            "msdyn_otc": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).msdyn_otc = n.getNumberValue(); },
            "msdyn_savedqueryname": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).msdyn_savedqueryname = n.getStringValue(); },
            "msdyn_sortorder": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).msdyn_sortorder = n.getNumberValue(); },
            "msdyn_type": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).msdyn_type = n.getNumberValue(); },
            "msdyn_userid": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).msdyn_userid = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_wallsavedqueryid": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).msdyn_wallsavedqueryid = n.getObjectValue<Msdyn_wallsavedquery>(createMsdyn_wallsavedqueryFromDiscriminatorValue); },
            "msdyn_wallsavedqueryusersettings_AsyncOperations": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).msdyn_wallsavedqueryusersettings_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_wallsavedqueryusersettings_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).msdyn_wallsavedqueryusersettings_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_wallsavedqueryusersettings_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).msdyn_wallsavedqueryusersettings_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_wallsavedqueryusersettings_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).msdyn_wallsavedqueryusersettings_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_wallsavedqueryusersettings_ProcessSession": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).msdyn_wallsavedqueryusersettings_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_wallsavedqueryusersettings_SyncErrors": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).msdyn_wallsavedqueryusersettings_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_wallsavedqueryusersettingsid": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).msdyn_wallsavedqueryusersettingsid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_wallsavedqueryusersettings).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_data property value. 
     * @returns a string
     */
    public get msdyn_data() {
        return this._msdyn_data;
    };
    /**
     * Sets the msdyn_data property value. 
     * @param value Value to set for the msdyn_data property.
     */
    public set msdyn_data(value: string | undefined) {
        this._msdyn_data = value;
    };
    /**
     * Gets the msdyn_default property value. 
     * @returns a integer
     */
    public get msdyn_default() {
        return this._msdyn_default;
    };
    /**
     * Sets the msdyn_default property value. 
     * @param value Value to set for the msdyn_default property.
     */
    public set msdyn_default(value: number | undefined) {
        this._msdyn_default = value;
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
     * Gets the msdyn_includewallinresponse property value. 
     * @returns a boolean
     */
    public get msdyn_includewallinresponse() {
        return this._msdyn_includewallinresponse;
    };
    /**
     * Sets the msdyn_includewallinresponse property value. 
     * @param value Value to set for the msdyn_includewallinresponse property.
     */
    public set msdyn_includewallinresponse(value: boolean | undefined) {
        this._msdyn_includewallinresponse = value;
    };
    /**
     * Gets the msdyn_isfollowing property value. 
     * @returns a boolean
     */
    public get msdyn_isfollowing() {
        return this._msdyn_isfollowing;
    };
    /**
     * Sets the msdyn_isfollowing property value. 
     * @param value Value to set for the msdyn_isfollowing property.
     */
    public set msdyn_isfollowing(value: boolean | undefined) {
        this._msdyn_isfollowing = value;
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
     * Gets the msdyn_sortorder property value. 
     * @returns a integer
     */
    public get msdyn_sortorder() {
        return this._msdyn_sortorder;
    };
    /**
     * Sets the msdyn_sortorder property value. 
     * @param value Value to set for the msdyn_sortorder property.
     */
    public set msdyn_sortorder(value: number | undefined) {
        this._msdyn_sortorder = value;
    };
    /**
     * Gets the msdyn_type property value. 
     * @returns a integer
     */
    public get msdyn_type() {
        return this._msdyn_type;
    };
    /**
     * Sets the msdyn_type property value. 
     * @param value Value to set for the msdyn_type property.
     */
    public set msdyn_type(value: number | undefined) {
        this._msdyn_type = value;
    };
    /**
     * Gets the msdyn_userid property value. 
     * @returns a systemuser
     */
    public get msdyn_userid() {
        return this._msdyn_userid;
    };
    /**
     * Sets the msdyn_userid property value. 
     * @param value Value to set for the msdyn_userid property.
     */
    public set msdyn_userid(value: Systemuser | undefined) {
        this._msdyn_userid = value;
    };
    /**
     * Gets the msdyn_wallsavedqueryid property value. 
     * @returns a msdyn_wallsavedquery
     */
    public get msdyn_wallsavedqueryid() {
        return this._msdyn_wallsavedqueryid;
    };
    /**
     * Sets the msdyn_wallsavedqueryid property value. 
     * @param value Value to set for the msdyn_wallsavedqueryid property.
     */
    public set msdyn_wallsavedqueryid(value: Msdyn_wallsavedquery | undefined) {
        this._msdyn_wallsavedqueryid = value;
    };
    /**
     * Gets the msdyn_wallsavedqueryusersettings_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_wallsavedqueryusersettings_AsyncOperations() {
        return this._msdyn_wallsavedqueryusersettings_AsyncOperations;
    };
    /**
     * Sets the msdyn_wallsavedqueryusersettings_AsyncOperations property value. 
     * @param value Value to set for the msdyn_wallsavedqueryusersettings_AsyncOperations property.
     */
    public set msdyn_wallsavedqueryusersettings_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_wallsavedqueryusersettings_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_wallsavedqueryusersettings_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_wallsavedqueryusersettings_BulkDeleteFailures() {
        return this._msdyn_wallsavedqueryusersettings_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_wallsavedqueryusersettings_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_wallsavedqueryusersettings_BulkDeleteFailures property.
     */
    public set msdyn_wallsavedqueryusersettings_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_wallsavedqueryusersettings_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_wallsavedqueryusersettings_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_wallsavedqueryusersettings_MailboxTrackingFolders() {
        return this._msdyn_wallsavedqueryusersettings_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_wallsavedqueryusersettings_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_wallsavedqueryusersettings_MailboxTrackingFolders property.
     */
    public set msdyn_wallsavedqueryusersettings_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_wallsavedqueryusersettings_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_wallsavedqueryusersettings_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_wallsavedqueryusersettings_PrincipalObjectAttributeAccesses() {
        return this._msdyn_wallsavedqueryusersettings_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_wallsavedqueryusersettings_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_wallsavedqueryusersettings_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_wallsavedqueryusersettings_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_wallsavedqueryusersettings_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_wallsavedqueryusersettings_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_wallsavedqueryusersettings_ProcessSession() {
        return this._msdyn_wallsavedqueryusersettings_ProcessSession;
    };
    /**
     * Sets the msdyn_wallsavedqueryusersettings_ProcessSession property value. 
     * @param value Value to set for the msdyn_wallsavedqueryusersettings_ProcessSession property.
     */
    public set msdyn_wallsavedqueryusersettings_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_wallsavedqueryusersettings_ProcessSession = value;
    };
    /**
     * Gets the msdyn_wallsavedqueryusersettings_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_wallsavedqueryusersettings_SyncErrors() {
        return this._msdyn_wallsavedqueryusersettings_SyncErrors;
    };
    /**
     * Sets the msdyn_wallsavedqueryusersettings_SyncErrors property value. 
     * @param value Value to set for the msdyn_wallsavedqueryusersettings_SyncErrors property.
     */
    public set msdyn_wallsavedqueryusersettings_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_wallsavedqueryusersettings_SyncErrors = value;
    };
    /**
     * Gets the msdyn_wallsavedqueryusersettingsid property value. 
     * @returns a string
     */
    public get msdyn_wallsavedqueryusersettingsid() {
        return this._msdyn_wallsavedqueryusersettingsid;
    };
    /**
     * Sets the msdyn_wallsavedqueryusersettingsid property value. 
     * @param value Value to set for the msdyn_wallsavedqueryusersettingsid property.
     */
    public set msdyn_wallsavedqueryusersettingsid(value: string | undefined) {
        this._msdyn_wallsavedqueryusersettingsid = value;
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
        writer.writeStringValue("_msdyn_userid_value", this._msdyn_userid_value);
        writer.writeStringValue("_msdyn_wallsavedqueryid_value", this._msdyn_wallsavedqueryid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_data", this.msdyn_data);
        writer.writeNumberValue("msdyn_default", this.msdyn_default);
        writer.writeStringValue("msdyn_entitydisplayname", this.msdyn_entitydisplayname);
        writer.writeStringValue("msdyn_entityname", this.msdyn_entityname);
        writer.writeBooleanValue("msdyn_includewallinresponse", this.msdyn_includewallinresponse);
        writer.writeBooleanValue("msdyn_isfollowing", this.msdyn_isfollowing);
        writer.writeBooleanValue("msdyn_isvirtual", this.msdyn_isvirtual);
        writer.writeBooleanValue("msdyn_isvisible", this.msdyn_isvisible);
        writer.writeNumberValue("msdyn_isvisiblebit", this.msdyn_isvisiblebit);
        writer.writeNumberValue("msdyn_otc", this.msdyn_otc);
        writer.writeStringValue("msdyn_savedqueryname", this.msdyn_savedqueryname);
        writer.writeNumberValue("msdyn_sortorder", this.msdyn_sortorder);
        writer.writeNumberValue("msdyn_type", this.msdyn_type);
        writer.writeObjectValue<Systemuser>("msdyn_userid", this.msdyn_userid);
        writer.writeObjectValue<Msdyn_wallsavedquery>("msdyn_wallsavedqueryid", this.msdyn_wallsavedqueryid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_wallsavedqueryusersettings_AsyncOperations", this.msdyn_wallsavedqueryusersettings_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_wallsavedqueryusersettings_BulkDeleteFailures", this.msdyn_wallsavedqueryusersettings_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_wallsavedqueryusersettings_MailboxTrackingFolders", this.msdyn_wallsavedqueryusersettings_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_wallsavedqueryusersettings_PrincipalObjectAttributeAccesses", this.msdyn_wallsavedqueryusersettings_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_wallsavedqueryusersettings_ProcessSession", this.msdyn_wallsavedqueryusersettings_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_wallsavedqueryusersettings_SyncErrors", this.msdyn_wallsavedqueryusersettings_SyncErrors);
        writer.writeStringValue("msdyn_wallsavedqueryusersettingsid", this.msdyn_wallsavedqueryusersettingsid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
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
