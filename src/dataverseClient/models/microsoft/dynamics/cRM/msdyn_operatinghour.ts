import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_livechatconfigFromDiscriminatorValue} from './createMsdyn_livechatconfigFromDiscriminatorValue';
import {createMsdyn_ocsmschannelsettingFromDiscriminatorValue} from './createMsdyn_ocsmschannelsettingFromDiscriminatorValue';
import {createMsdyn_smsnumberFromDiscriminatorValue} from './createMsdyn_smsnumberFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQueueFromDiscriminatorValue} from './createQueueFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msdyn_livechatconfig, Msdyn_ocsmschannelsetting, Msdyn_smsnumber, Principal, Principalobjectattributeaccess, Processsession, Queue, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_operatinghour extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
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
    private _msdyn_calendarid?: string | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_enablealldays?: boolean | undefined;
    private _msdyn_endtimestring?: string | undefined;
    private _msdyn_msdyn_operatinghour_msdyn_livechatconfig?: Msdyn_livechatconfig[] | undefined;
    private _msdyn_msdyn_operatinghour_msdyn_ocsmschannelsetting_operatinghoursid?: Msdyn_ocsmschannelsetting[] | undefined;
    private _msdyn_msdyn_operatinghour_msdyn_smsnumber_operatinghours?: Msdyn_smsnumber[] | undefined;
    private _msdyn_msdyn_operatinghour_queue?: Queue[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_oc_daysofweek?: string | undefined;
    private _msdyn_operatinghour_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_operatinghour_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_operatinghour_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_operatinghour_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_operatinghour_ProcessSession?: Processsession[] | undefined;
    private _msdyn_operatinghour_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_operatinghourid?: string | undefined;
    private _msdyn_starttimestring?: string | undefined;
    private _msdyn_timezone?: number | undefined;
    private _msdyn_totalworkhours?: string | undefined;
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
     * Instantiates a new msdyn_operatinghour and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_operatinghour)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_operatinghour)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_operatinghour)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_operatinghour)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_operatinghour)._organizationid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_operatinghour)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_operatinghour)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_operatinghour)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_operatinghour)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_operatinghour).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_operatinghour).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_operatinghour).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_operatinghour).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_operatinghour).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_operatinghour).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_operatinghour).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_calendarid": (o, n) => { (o as unknown as Msdyn_operatinghour).msdyn_calendarid = n.getStringValue(); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_operatinghour).msdyn_description = n.getStringValue(); },
            "msdyn_enablealldays": (o, n) => { (o as unknown as Msdyn_operatinghour).msdyn_enablealldays = n.getBooleanValue(); },
            "msdyn_endtimestring": (o, n) => { (o as unknown as Msdyn_operatinghour).msdyn_endtimestring = n.getStringValue(); },
            "msdyn_msdyn_operatinghour_msdyn_livechatconfig": (o, n) => { (o as unknown as Msdyn_operatinghour).msdyn_msdyn_operatinghour_msdyn_livechatconfig = n.getCollectionOfObjectValues<Msdyn_livechatconfig>(createMsdyn_livechatconfigFromDiscriminatorValue); },
            "msdyn_msdyn_operatinghour_msdyn_ocsmschannelsetting_operatinghoursid": (o, n) => { (o as unknown as Msdyn_operatinghour).msdyn_msdyn_operatinghour_msdyn_ocsmschannelsetting_operatinghoursid = n.getCollectionOfObjectValues<Msdyn_ocsmschannelsetting>(createMsdyn_ocsmschannelsettingFromDiscriminatorValue); },
            "msdyn_msdyn_operatinghour_msdyn_smsnumber_operatinghours": (o, n) => { (o as unknown as Msdyn_operatinghour).msdyn_msdyn_operatinghour_msdyn_smsnumber_operatinghours = n.getCollectionOfObjectValues<Msdyn_smsnumber>(createMsdyn_smsnumberFromDiscriminatorValue); },
            "msdyn_msdyn_operatinghour_queue": (o, n) => { (o as unknown as Msdyn_operatinghour).msdyn_msdyn_operatinghour_queue = n.getCollectionOfObjectValues<Queue>(createQueueFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_operatinghour).msdyn_name = n.getStringValue(); },
            "msdyn_oc_daysofweek": (o, n) => { (o as unknown as Msdyn_operatinghour).msdyn_oc_daysofweek = n.getStringValue(); },
            "msdyn_operatinghour_AsyncOperations": (o, n) => { (o as unknown as Msdyn_operatinghour).msdyn_operatinghour_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_operatinghour_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_operatinghour).msdyn_operatinghour_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_operatinghour_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_operatinghour).msdyn_operatinghour_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_operatinghour_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_operatinghour).msdyn_operatinghour_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_operatinghour_ProcessSession": (o, n) => { (o as unknown as Msdyn_operatinghour).msdyn_operatinghour_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_operatinghour_SyncErrors": (o, n) => { (o as unknown as Msdyn_operatinghour).msdyn_operatinghour_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_operatinghourid": (o, n) => { (o as unknown as Msdyn_operatinghour).msdyn_operatinghourid = n.getStringValue(); },
            "msdyn_starttimestring": (o, n) => { (o as unknown as Msdyn_operatinghour).msdyn_starttimestring = n.getStringValue(); },
            "msdyn_timezone": (o, n) => { (o as unknown as Msdyn_operatinghour).msdyn_timezone = n.getNumberValue(); },
            "msdyn_totalworkhours": (o, n) => { (o as unknown as Msdyn_operatinghour).msdyn_totalworkhours = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_operatinghour).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_operatinghour).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_operatinghour).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_operatinghour).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_operatinghour).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_operatinghour).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_operatinghour).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_operatinghour).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_operatinghour).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_operatinghour).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_calendarid property value. 
     * @returns a string
     */
    public get msdyn_calendarid() {
        return this._msdyn_calendarid;
    };
    /**
     * Sets the msdyn_calendarid property value. 
     * @param value Value to set for the msdyn_calendarid property.
     */
    public set msdyn_calendarid(value: string | undefined) {
        this._msdyn_calendarid = value;
    };
    /**
     * Gets the msdyn_description property value. 
     * @returns a string
     */
    public get msdyn_description() {
        return this._msdyn_description;
    };
    /**
     * Sets the msdyn_description property value. 
     * @param value Value to set for the msdyn_description property.
     */
    public set msdyn_description(value: string | undefined) {
        this._msdyn_description = value;
    };
    /**
     * Gets the msdyn_enablealldays property value. 
     * @returns a boolean
     */
    public get msdyn_enablealldays() {
        return this._msdyn_enablealldays;
    };
    /**
     * Sets the msdyn_enablealldays property value. 
     * @param value Value to set for the msdyn_enablealldays property.
     */
    public set msdyn_enablealldays(value: boolean | undefined) {
        this._msdyn_enablealldays = value;
    };
    /**
     * Gets the msdyn_endtimestring property value. 
     * @returns a string
     */
    public get msdyn_endtimestring() {
        return this._msdyn_endtimestring;
    };
    /**
     * Sets the msdyn_endtimestring property value. 
     * @param value Value to set for the msdyn_endtimestring property.
     */
    public set msdyn_endtimestring(value: string | undefined) {
        this._msdyn_endtimestring = value;
    };
    /**
     * Gets the msdyn_msdyn_operatinghour_msdyn_livechatconfig property value. 
     * @returns a msdyn_livechatconfig
     */
    public get msdyn_msdyn_operatinghour_msdyn_livechatconfig() {
        return this._msdyn_msdyn_operatinghour_msdyn_livechatconfig;
    };
    /**
     * Sets the msdyn_msdyn_operatinghour_msdyn_livechatconfig property value. 
     * @param value Value to set for the msdyn_msdyn_operatinghour_msdyn_livechatconfig property.
     */
    public set msdyn_msdyn_operatinghour_msdyn_livechatconfig(value: Msdyn_livechatconfig[] | undefined) {
        this._msdyn_msdyn_operatinghour_msdyn_livechatconfig = value;
    };
    /**
     * Gets the msdyn_msdyn_operatinghour_msdyn_ocsmschannelsetting_operatinghoursid property value. 
     * @returns a msdyn_ocsmschannelsetting
     */
    public get msdyn_msdyn_operatinghour_msdyn_ocsmschannelsetting_operatinghoursid() {
        return this._msdyn_msdyn_operatinghour_msdyn_ocsmschannelsetting_operatinghoursid;
    };
    /**
     * Sets the msdyn_msdyn_operatinghour_msdyn_ocsmschannelsetting_operatinghoursid property value. 
     * @param value Value to set for the msdyn_msdyn_operatinghour_msdyn_ocsmschannelsetting_operatinghoursid property.
     */
    public set msdyn_msdyn_operatinghour_msdyn_ocsmschannelsetting_operatinghoursid(value: Msdyn_ocsmschannelsetting[] | undefined) {
        this._msdyn_msdyn_operatinghour_msdyn_ocsmschannelsetting_operatinghoursid = value;
    };
    /**
     * Gets the msdyn_msdyn_operatinghour_msdyn_smsnumber_operatinghours property value. 
     * @returns a msdyn_smsnumber
     */
    public get msdyn_msdyn_operatinghour_msdyn_smsnumber_operatinghours() {
        return this._msdyn_msdyn_operatinghour_msdyn_smsnumber_operatinghours;
    };
    /**
     * Sets the msdyn_msdyn_operatinghour_msdyn_smsnumber_operatinghours property value. 
     * @param value Value to set for the msdyn_msdyn_operatinghour_msdyn_smsnumber_operatinghours property.
     */
    public set msdyn_msdyn_operatinghour_msdyn_smsnumber_operatinghours(value: Msdyn_smsnumber[] | undefined) {
        this._msdyn_msdyn_operatinghour_msdyn_smsnumber_operatinghours = value;
    };
    /**
     * Gets the msdyn_msdyn_operatinghour_queue property value. 
     * @returns a queue
     */
    public get msdyn_msdyn_operatinghour_queue() {
        return this._msdyn_msdyn_operatinghour_queue;
    };
    /**
     * Sets the msdyn_msdyn_operatinghour_queue property value. 
     * @param value Value to set for the msdyn_msdyn_operatinghour_queue property.
     */
    public set msdyn_msdyn_operatinghour_queue(value: Queue[] | undefined) {
        this._msdyn_msdyn_operatinghour_queue = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_oc_daysofweek property value. 
     * @returns a string
     */
    public get msdyn_oc_daysofweek() {
        return this._msdyn_oc_daysofweek;
    };
    /**
     * Sets the msdyn_oc_daysofweek property value. 
     * @param value Value to set for the msdyn_oc_daysofweek property.
     */
    public set msdyn_oc_daysofweek(value: string | undefined) {
        this._msdyn_oc_daysofweek = value;
    };
    /**
     * Gets the msdyn_operatinghour_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_operatinghour_AsyncOperations() {
        return this._msdyn_operatinghour_AsyncOperations;
    };
    /**
     * Sets the msdyn_operatinghour_AsyncOperations property value. 
     * @param value Value to set for the msdyn_operatinghour_AsyncOperations property.
     */
    public set msdyn_operatinghour_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_operatinghour_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_operatinghour_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_operatinghour_BulkDeleteFailures() {
        return this._msdyn_operatinghour_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_operatinghour_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_operatinghour_BulkDeleteFailures property.
     */
    public set msdyn_operatinghour_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_operatinghour_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_operatinghour_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_operatinghour_MailboxTrackingFolders() {
        return this._msdyn_operatinghour_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_operatinghour_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_operatinghour_MailboxTrackingFolders property.
     */
    public set msdyn_operatinghour_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_operatinghour_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_operatinghour_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_operatinghour_PrincipalObjectAttributeAccesses() {
        return this._msdyn_operatinghour_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_operatinghour_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_operatinghour_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_operatinghour_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_operatinghour_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_operatinghour_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_operatinghour_ProcessSession() {
        return this._msdyn_operatinghour_ProcessSession;
    };
    /**
     * Sets the msdyn_operatinghour_ProcessSession property value. 
     * @param value Value to set for the msdyn_operatinghour_ProcessSession property.
     */
    public set msdyn_operatinghour_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_operatinghour_ProcessSession = value;
    };
    /**
     * Gets the msdyn_operatinghour_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_operatinghour_SyncErrors() {
        return this._msdyn_operatinghour_SyncErrors;
    };
    /**
     * Sets the msdyn_operatinghour_SyncErrors property value. 
     * @param value Value to set for the msdyn_operatinghour_SyncErrors property.
     */
    public set msdyn_operatinghour_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_operatinghour_SyncErrors = value;
    };
    /**
     * Gets the msdyn_operatinghourid property value. 
     * @returns a string
     */
    public get msdyn_operatinghourid() {
        return this._msdyn_operatinghourid;
    };
    /**
     * Sets the msdyn_operatinghourid property value. 
     * @param value Value to set for the msdyn_operatinghourid property.
     */
    public set msdyn_operatinghourid(value: string | undefined) {
        this._msdyn_operatinghourid = value;
    };
    /**
     * Gets the msdyn_starttimestring property value. 
     * @returns a string
     */
    public get msdyn_starttimestring() {
        return this._msdyn_starttimestring;
    };
    /**
     * Sets the msdyn_starttimestring property value. 
     * @param value Value to set for the msdyn_starttimestring property.
     */
    public set msdyn_starttimestring(value: string | undefined) {
        this._msdyn_starttimestring = value;
    };
    /**
     * Gets the msdyn_timezone property value. 
     * @returns a integer
     */
    public get msdyn_timezone() {
        return this._msdyn_timezone;
    };
    /**
     * Sets the msdyn_timezone property value. 
     * @param value Value to set for the msdyn_timezone property.
     */
    public set msdyn_timezone(value: number | undefined) {
        this._msdyn_timezone = value;
    };
    /**
     * Gets the msdyn_totalworkhours property value. 
     * @returns a string
     */
    public get msdyn_totalworkhours() {
        return this._msdyn_totalworkhours;
    };
    /**
     * Sets the msdyn_totalworkhours property value. 
     * @param value Value to set for the msdyn_totalworkhours property.
     */
    public set msdyn_totalworkhours(value: string | undefined) {
        this._msdyn_totalworkhours = value;
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
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
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
        writer.writeStringValue("msdyn_calendarid", this.msdyn_calendarid);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeBooleanValue("msdyn_enablealldays", this.msdyn_enablealldays);
        writer.writeStringValue("msdyn_endtimestring", this.msdyn_endtimestring);
        writer.writeCollectionOfObjectValues<Msdyn_livechatconfig>("msdyn_msdyn_operatinghour_msdyn_livechatconfig", this.msdyn_msdyn_operatinghour_msdyn_livechatconfig);
        writer.writeCollectionOfObjectValues<Msdyn_ocsmschannelsetting>("msdyn_msdyn_operatinghour_msdyn_ocsmschannelsetting_operatinghoursid", this.msdyn_msdyn_operatinghour_msdyn_ocsmschannelsetting_operatinghoursid);
        writer.writeCollectionOfObjectValues<Msdyn_smsnumber>("msdyn_msdyn_operatinghour_msdyn_smsnumber_operatinghours", this.msdyn_msdyn_operatinghour_msdyn_smsnumber_operatinghours);
        writer.writeCollectionOfObjectValues<Queue>("msdyn_msdyn_operatinghour_queue", this.msdyn_msdyn_operatinghour_queue);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_oc_daysofweek", this.msdyn_oc_daysofweek);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_operatinghour_AsyncOperations", this.msdyn_operatinghour_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_operatinghour_BulkDeleteFailures", this.msdyn_operatinghour_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_operatinghour_MailboxTrackingFolders", this.msdyn_operatinghour_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_operatinghour_PrincipalObjectAttributeAccesses", this.msdyn_operatinghour_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_operatinghour_ProcessSession", this.msdyn_operatinghour_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_operatinghour_SyncErrors", this.msdyn_operatinghour_SyncErrors);
        writer.writeStringValue("msdyn_operatinghourid", this.msdyn_operatinghourid);
        writer.writeStringValue("msdyn_starttimestring", this.msdyn_starttimestring);
        writer.writeNumberValue("msdyn_timezone", this.msdyn_timezone);
        writer.writeStringValue("msdyn_totalworkhours", this.msdyn_totalworkhours);
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
