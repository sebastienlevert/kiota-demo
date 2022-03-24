import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourceFromDiscriminatorValue} from './createBookableresourceFromDiscriminatorValue';
import {createBookingstatusFromDiscriminatorValue} from './createBookingstatusFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_projectFromDiscriminatorValue} from './createMsdyn_projectFromDiscriminatorValue';
import {createMsdyn_projecttaskFromDiscriminatorValue} from './createMsdyn_projecttaskFromDiscriminatorValue';
import {createMsdyn_projectteamFromDiscriminatorValue} from './createMsdyn_projectteamFromDiscriminatorValue';
import {createMsdyn_resourceassignmentdetailFromDiscriminatorValue} from './createMsdyn_resourceassignmentdetailFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bookableresource, Bookingstatus, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msdyn_project, Msdyn_projecttask, Msdyn_projectteam, Msdyn_resourceassignmentdetail, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_resourceassignment extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_bookableresourceid_value?: string | undefined;
    private __msdyn_bookingstatusid_value?: string | undefined;
    private __msdyn_projectid_value?: string | undefined;
    private __msdyn_projectteamid_value?: string | undefined;
    private __msdyn_taskid_value?: string | undefined;
    private __msdyn_userresourceid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_bookableresourceid?: Bookableresource | undefined;
    private _msdyn_bookingstatusid?: Bookingstatus | undefined;
    private _msdyn_committype?: number | undefined;
    private _msdyn_fromdate?: Date | undefined;
    private _msdyn_hours?: number | undefined;
    private _msdyn_msdyn_resourceassignment_msdyn_resourceassignmentdetail_resourceassignmentid?: Msdyn_resourceassignmentdetail[] | undefined;
    private _msdyn_msprojectclientid?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_plannedcost?: number | undefined;
    private _msdyn_plannedcost_base?: number | undefined;
    private _msdyn_plannedcostcontour?: string | undefined;
    private _msdyn_plannedsales?: number | undefined;
    private _msdyn_plannedsales_base?: number | undefined;
    private _msdyn_plannedsalescontour?: string | undefined;
    private _msdyn_plannedwork?: string | undefined;
    private _msdyn_projectid?: Msdyn_project | undefined;
    private _msdyn_projectteamid?: Msdyn_projectteam | undefined;
    private _msdyn_resourceassignment_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_resourceassignment_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_resourceassignment_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_resourceassignment_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_resourceassignment_ProcessSession?: Processsession[] | undefined;
    private _msdyn_resourceassignment_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_resourceassignmentid?: string | undefined;
    private _msdyn_taskid?: Msdyn_projecttask | undefined;
    private _msdyn_todate?: Date | undefined;
    private _msdyn_userresourceid?: Systemuser | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
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
     * Gets the _msdyn_bookableresourceid_value property value. 
     * @returns a string
     */
    public get _msdyn_bookableresourceid_value() {
        return this.__msdyn_bookableresourceid_value;
    };
    /**
     * Sets the _msdyn_bookableresourceid_value property value. 
     * @param value Value to set for the _msdyn_bookableresourceid_value property.
     */
    public set _msdyn_bookableresourceid_value(value: string | undefined) {
        this.__msdyn_bookableresourceid_value = value;
    };
    /**
     * Gets the _msdyn_bookingstatusid_value property value. 
     * @returns a string
     */
    public get _msdyn_bookingstatusid_value() {
        return this.__msdyn_bookingstatusid_value;
    };
    /**
     * Sets the _msdyn_bookingstatusid_value property value. 
     * @param value Value to set for the _msdyn_bookingstatusid_value property.
     */
    public set _msdyn_bookingstatusid_value(value: string | undefined) {
        this.__msdyn_bookingstatusid_value = value;
    };
    /**
     * Gets the _msdyn_projectid_value property value. 
     * @returns a string
     */
    public get _msdyn_projectid_value() {
        return this.__msdyn_projectid_value;
    };
    /**
     * Sets the _msdyn_projectid_value property value. 
     * @param value Value to set for the _msdyn_projectid_value property.
     */
    public set _msdyn_projectid_value(value: string | undefined) {
        this.__msdyn_projectid_value = value;
    };
    /**
     * Gets the _msdyn_projectteamid_value property value. 
     * @returns a string
     */
    public get _msdyn_projectteamid_value() {
        return this.__msdyn_projectteamid_value;
    };
    /**
     * Sets the _msdyn_projectteamid_value property value. 
     * @param value Value to set for the _msdyn_projectteamid_value property.
     */
    public set _msdyn_projectteamid_value(value: string | undefined) {
        this.__msdyn_projectteamid_value = value;
    };
    /**
     * Gets the _msdyn_taskid_value property value. 
     * @returns a string
     */
    public get _msdyn_taskid_value() {
        return this.__msdyn_taskid_value;
    };
    /**
     * Sets the _msdyn_taskid_value property value. 
     * @param value Value to set for the _msdyn_taskid_value property.
     */
    public set _msdyn_taskid_value(value: string | undefined) {
        this.__msdyn_taskid_value = value;
    };
    /**
     * Gets the _msdyn_userresourceid_value property value. 
     * @returns a string
     */
    public get _msdyn_userresourceid_value() {
        return this.__msdyn_userresourceid_value;
    };
    /**
     * Sets the _msdyn_userresourceid_value property value. 
     * @param value Value to set for the _msdyn_userresourceid_value property.
     */
    public set _msdyn_userresourceid_value(value: string | undefined) {
        this.__msdyn_userresourceid_value = value;
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
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Instantiates a new msdyn_resourceassignment and sets the default values.
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
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_resourceassignment)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_resourceassignment)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_resourceassignment)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_resourceassignment)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_bookableresourceid_value": (o, n) => { (o as unknown as Msdyn_resourceassignment)._msdyn_bookableresourceid_value = n.getStringValue(); },
            "_msdyn_bookingstatusid_value": (o, n) => { (o as unknown as Msdyn_resourceassignment)._msdyn_bookingstatusid_value = n.getStringValue(); },
            "_msdyn_projectid_value": (o, n) => { (o as unknown as Msdyn_resourceassignment)._msdyn_projectid_value = n.getStringValue(); },
            "_msdyn_projectteamid_value": (o, n) => { (o as unknown as Msdyn_resourceassignment)._msdyn_projectteamid_value = n.getStringValue(); },
            "_msdyn_taskid_value": (o, n) => { (o as unknown as Msdyn_resourceassignment)._msdyn_taskid_value = n.getStringValue(); },
            "_msdyn_userresourceid_value": (o, n) => { (o as unknown as Msdyn_resourceassignment)._msdyn_userresourceid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_resourceassignment)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_resourceassignment)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_resourceassignment)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_resourceassignment)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_resourceassignment)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_resourceassignment).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_resourceassignment).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_resourceassignment).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_resourceassignment).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_resourceassignment).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_resourceassignment).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_resourceassignment).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_resourceassignment).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_bookableresourceid": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_bookableresourceid = n.getObjectValue<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "msdyn_bookingstatusid": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_bookingstatusid = n.getObjectValue<Bookingstatus>(createBookingstatusFromDiscriminatorValue); },
            "msdyn_committype": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_committype = n.getNumberValue(); },
            "msdyn_fromdate": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_fromdate = n.getDateValue(); },
            "msdyn_hours": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_hours = n.getNumberValue(); },
            "msdyn_msdyn_resourceassignment_msdyn_resourceassignmentdetail_resourceassignmentid": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_msdyn_resourceassignment_msdyn_resourceassignmentdetail_resourceassignmentid = n.getCollectionOfObjectValues<Msdyn_resourceassignmentdetail>(createMsdyn_resourceassignmentdetailFromDiscriminatorValue); },
            "msdyn_msprojectclientid": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_msprojectclientid = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_name = n.getStringValue(); },
            "msdyn_plannedcost": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_plannedcost = n.getNumberValue(); },
            "msdyn_plannedcost_base": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_plannedcost_base = n.getNumberValue(); },
            "msdyn_plannedcostcontour": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_plannedcostcontour = n.getStringValue(); },
            "msdyn_plannedsales": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_plannedsales = n.getNumberValue(); },
            "msdyn_plannedsales_base": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_plannedsales_base = n.getNumberValue(); },
            "msdyn_plannedsalescontour": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_plannedsalescontour = n.getStringValue(); },
            "msdyn_plannedwork": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_plannedwork = n.getStringValue(); },
            "msdyn_projectid": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_projectid = n.getObjectValue<Msdyn_project>(createMsdyn_projectFromDiscriminatorValue); },
            "msdyn_projectteamid": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_projectteamid = n.getObjectValue<Msdyn_projectteam>(createMsdyn_projectteamFromDiscriminatorValue); },
            "msdyn_resourceassignment_AsyncOperations": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_resourceassignment_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_resourceassignment_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_resourceassignment_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_resourceassignment_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_resourceassignment_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_resourceassignment_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_resourceassignment_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_resourceassignment_ProcessSession": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_resourceassignment_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_resourceassignment_SyncErrors": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_resourceassignment_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_resourceassignmentid": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_resourceassignmentid = n.getStringValue(); },
            "msdyn_taskid": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_taskid = n.getObjectValue<Msdyn_projecttask>(createMsdyn_projecttaskFromDiscriminatorValue); },
            "msdyn_todate": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_todate = n.getDateValue(); },
            "msdyn_userresourceid": (o, n) => { (o as unknown as Msdyn_resourceassignment).msdyn_userresourceid = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_resourceassignment).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_resourceassignment).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_resourceassignment).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_resourceassignment).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_resourceassignment).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_resourceassignment).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_resourceassignment).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_resourceassignment).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_resourceassignment).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_resourceassignment).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_resourceassignment).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_bookableresourceid property value. 
     * @returns a bookableresource
     */
    public get msdyn_bookableresourceid() {
        return this._msdyn_bookableresourceid;
    };
    /**
     * Sets the msdyn_bookableresourceid property value. 
     * @param value Value to set for the msdyn_bookableresourceid property.
     */
    public set msdyn_bookableresourceid(value: Bookableresource | undefined) {
        this._msdyn_bookableresourceid = value;
    };
    /**
     * Gets the msdyn_bookingstatusid property value. 
     * @returns a bookingstatus
     */
    public get msdyn_bookingstatusid() {
        return this._msdyn_bookingstatusid;
    };
    /**
     * Sets the msdyn_bookingstatusid property value. 
     * @param value Value to set for the msdyn_bookingstatusid property.
     */
    public set msdyn_bookingstatusid(value: Bookingstatus | undefined) {
        this._msdyn_bookingstatusid = value;
    };
    /**
     * Gets the msdyn_committype property value. 
     * @returns a integer
     */
    public get msdyn_committype() {
        return this._msdyn_committype;
    };
    /**
     * Sets the msdyn_committype property value. 
     * @param value Value to set for the msdyn_committype property.
     */
    public set msdyn_committype(value: number | undefined) {
        this._msdyn_committype = value;
    };
    /**
     * Gets the msdyn_fromdate property value. 
     * @returns a Date
     */
    public get msdyn_fromdate() {
        return this._msdyn_fromdate;
    };
    /**
     * Sets the msdyn_fromdate property value. 
     * @param value Value to set for the msdyn_fromdate property.
     */
    public set msdyn_fromdate(value: Date | undefined) {
        this._msdyn_fromdate = value;
    };
    /**
     * Gets the msdyn_hours property value. 
     * @returns a int64
     */
    public get msdyn_hours() {
        return this._msdyn_hours;
    };
    /**
     * Sets the msdyn_hours property value. 
     * @param value Value to set for the msdyn_hours property.
     */
    public set msdyn_hours(value: number | undefined) {
        this._msdyn_hours = value;
    };
    /**
     * Gets the msdyn_msdyn_resourceassignment_msdyn_resourceassignmentdetail_resourceassignmentid property value. 
     * @returns a msdyn_resourceassignmentdetail
     */
    public get msdyn_msdyn_resourceassignment_msdyn_resourceassignmentdetail_resourceassignmentid() {
        return this._msdyn_msdyn_resourceassignment_msdyn_resourceassignmentdetail_resourceassignmentid;
    };
    /**
     * Sets the msdyn_msdyn_resourceassignment_msdyn_resourceassignmentdetail_resourceassignmentid property value. 
     * @param value Value to set for the msdyn_msdyn_resourceassignment_msdyn_resourceassignmentdetail_resourceassignmentid property.
     */
    public set msdyn_msdyn_resourceassignment_msdyn_resourceassignmentdetail_resourceassignmentid(value: Msdyn_resourceassignmentdetail[] | undefined) {
        this._msdyn_msdyn_resourceassignment_msdyn_resourceassignmentdetail_resourceassignmentid = value;
    };
    /**
     * Gets the msdyn_msprojectclientid property value. 
     * @returns a string
     */
    public get msdyn_msprojectclientid() {
        return this._msdyn_msprojectclientid;
    };
    /**
     * Sets the msdyn_msprojectclientid property value. 
     * @param value Value to set for the msdyn_msprojectclientid property.
     */
    public set msdyn_msprojectclientid(value: string | undefined) {
        this._msdyn_msprojectclientid = value;
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
     * Gets the msdyn_plannedcost property value. 
     * @returns a int64
     */
    public get msdyn_plannedcost() {
        return this._msdyn_plannedcost;
    };
    /**
     * Sets the msdyn_plannedcost property value. 
     * @param value Value to set for the msdyn_plannedcost property.
     */
    public set msdyn_plannedcost(value: number | undefined) {
        this._msdyn_plannedcost = value;
    };
    /**
     * Gets the msdyn_plannedcost_base property value. 
     * @returns a int64
     */
    public get msdyn_plannedcost_base() {
        return this._msdyn_plannedcost_base;
    };
    /**
     * Sets the msdyn_plannedcost_base property value. 
     * @param value Value to set for the msdyn_plannedcost_base property.
     */
    public set msdyn_plannedcost_base(value: number | undefined) {
        this._msdyn_plannedcost_base = value;
    };
    /**
     * Gets the msdyn_plannedcostcontour property value. 
     * @returns a string
     */
    public get msdyn_plannedcostcontour() {
        return this._msdyn_plannedcostcontour;
    };
    /**
     * Sets the msdyn_plannedcostcontour property value. 
     * @param value Value to set for the msdyn_plannedcostcontour property.
     */
    public set msdyn_plannedcostcontour(value: string | undefined) {
        this._msdyn_plannedcostcontour = value;
    };
    /**
     * Gets the msdyn_plannedsales property value. 
     * @returns a int64
     */
    public get msdyn_plannedsales() {
        return this._msdyn_plannedsales;
    };
    /**
     * Sets the msdyn_plannedsales property value. 
     * @param value Value to set for the msdyn_plannedsales property.
     */
    public set msdyn_plannedsales(value: number | undefined) {
        this._msdyn_plannedsales = value;
    };
    /**
     * Gets the msdyn_plannedsales_base property value. 
     * @returns a int64
     */
    public get msdyn_plannedsales_base() {
        return this._msdyn_plannedsales_base;
    };
    /**
     * Sets the msdyn_plannedsales_base property value. 
     * @param value Value to set for the msdyn_plannedsales_base property.
     */
    public set msdyn_plannedsales_base(value: number | undefined) {
        this._msdyn_plannedsales_base = value;
    };
    /**
     * Gets the msdyn_plannedsalescontour property value. 
     * @returns a string
     */
    public get msdyn_plannedsalescontour() {
        return this._msdyn_plannedsalescontour;
    };
    /**
     * Sets the msdyn_plannedsalescontour property value. 
     * @param value Value to set for the msdyn_plannedsalescontour property.
     */
    public set msdyn_plannedsalescontour(value: string | undefined) {
        this._msdyn_plannedsalescontour = value;
    };
    /**
     * Gets the msdyn_plannedwork property value. 
     * @returns a string
     */
    public get msdyn_plannedwork() {
        return this._msdyn_plannedwork;
    };
    /**
     * Sets the msdyn_plannedwork property value. 
     * @param value Value to set for the msdyn_plannedwork property.
     */
    public set msdyn_plannedwork(value: string | undefined) {
        this._msdyn_plannedwork = value;
    };
    /**
     * Gets the msdyn_projectid property value. 
     * @returns a msdyn_project
     */
    public get msdyn_projectid() {
        return this._msdyn_projectid;
    };
    /**
     * Sets the msdyn_projectid property value. 
     * @param value Value to set for the msdyn_projectid property.
     */
    public set msdyn_projectid(value: Msdyn_project | undefined) {
        this._msdyn_projectid = value;
    };
    /**
     * Gets the msdyn_projectteamid property value. 
     * @returns a msdyn_projectteam
     */
    public get msdyn_projectteamid() {
        return this._msdyn_projectteamid;
    };
    /**
     * Sets the msdyn_projectteamid property value. 
     * @param value Value to set for the msdyn_projectteamid property.
     */
    public set msdyn_projectteamid(value: Msdyn_projectteam | undefined) {
        this._msdyn_projectteamid = value;
    };
    /**
     * Gets the msdyn_resourceassignment_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_resourceassignment_AsyncOperations() {
        return this._msdyn_resourceassignment_AsyncOperations;
    };
    /**
     * Sets the msdyn_resourceassignment_AsyncOperations property value. 
     * @param value Value to set for the msdyn_resourceassignment_AsyncOperations property.
     */
    public set msdyn_resourceassignment_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_resourceassignment_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_resourceassignment_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_resourceassignment_BulkDeleteFailures() {
        return this._msdyn_resourceassignment_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_resourceassignment_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_resourceassignment_BulkDeleteFailures property.
     */
    public set msdyn_resourceassignment_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_resourceassignment_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_resourceassignment_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_resourceassignment_MailboxTrackingFolders() {
        return this._msdyn_resourceassignment_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_resourceassignment_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_resourceassignment_MailboxTrackingFolders property.
     */
    public set msdyn_resourceassignment_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_resourceassignment_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_resourceassignment_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_resourceassignment_PrincipalObjectAttributeAccesses() {
        return this._msdyn_resourceassignment_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_resourceassignment_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_resourceassignment_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_resourceassignment_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_resourceassignment_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_resourceassignment_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_resourceassignment_ProcessSession() {
        return this._msdyn_resourceassignment_ProcessSession;
    };
    /**
     * Sets the msdyn_resourceassignment_ProcessSession property value. 
     * @param value Value to set for the msdyn_resourceassignment_ProcessSession property.
     */
    public set msdyn_resourceassignment_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_resourceassignment_ProcessSession = value;
    };
    /**
     * Gets the msdyn_resourceassignment_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_resourceassignment_SyncErrors() {
        return this._msdyn_resourceassignment_SyncErrors;
    };
    /**
     * Sets the msdyn_resourceassignment_SyncErrors property value. 
     * @param value Value to set for the msdyn_resourceassignment_SyncErrors property.
     */
    public set msdyn_resourceassignment_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_resourceassignment_SyncErrors = value;
    };
    /**
     * Gets the msdyn_resourceassignmentid property value. 
     * @returns a string
     */
    public get msdyn_resourceassignmentid() {
        return this._msdyn_resourceassignmentid;
    };
    /**
     * Sets the msdyn_resourceassignmentid property value. 
     * @param value Value to set for the msdyn_resourceassignmentid property.
     */
    public set msdyn_resourceassignmentid(value: string | undefined) {
        this._msdyn_resourceassignmentid = value;
    };
    /**
     * Gets the msdyn_taskid property value. 
     * @returns a msdyn_projecttask
     */
    public get msdyn_taskid() {
        return this._msdyn_taskid;
    };
    /**
     * Sets the msdyn_taskid property value. 
     * @param value Value to set for the msdyn_taskid property.
     */
    public set msdyn_taskid(value: Msdyn_projecttask | undefined) {
        this._msdyn_taskid = value;
    };
    /**
     * Gets the msdyn_todate property value. 
     * @returns a Date
     */
    public get msdyn_todate() {
        return this._msdyn_todate;
    };
    /**
     * Sets the msdyn_todate property value. 
     * @param value Value to set for the msdyn_todate property.
     */
    public set msdyn_todate(value: Date | undefined) {
        this._msdyn_todate = value;
    };
    /**
     * Gets the msdyn_userresourceid property value. 
     * @returns a systemuser
     */
    public get msdyn_userresourceid() {
        return this._msdyn_userresourceid;
    };
    /**
     * Sets the msdyn_userresourceid property value. 
     * @param value Value to set for the msdyn_userresourceid property.
     */
    public set msdyn_userresourceid(value: Systemuser | undefined) {
        this._msdyn_userresourceid = value;
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
        writer.writeStringValue("_msdyn_bookableresourceid_value", this._msdyn_bookableresourceid_value);
        writer.writeStringValue("_msdyn_bookingstatusid_value", this._msdyn_bookingstatusid_value);
        writer.writeStringValue("_msdyn_projectid_value", this._msdyn_projectid_value);
        writer.writeStringValue("_msdyn_projectteamid_value", this._msdyn_projectteamid_value);
        writer.writeStringValue("_msdyn_taskid_value", this._msdyn_taskid_value);
        writer.writeStringValue("_msdyn_userresourceid_value", this._msdyn_userresourceid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Bookableresource>("msdyn_bookableresourceid", this.msdyn_bookableresourceid);
        writer.writeObjectValue<Bookingstatus>("msdyn_bookingstatusid", this.msdyn_bookingstatusid);
        writer.writeNumberValue("msdyn_committype", this.msdyn_committype);
        writer.writeDateValue("msdyn_fromdate", this.msdyn_fromdate);
        writer.writeNumberValue("msdyn_hours", this.msdyn_hours);
        writer.writeCollectionOfObjectValues<Msdyn_resourceassignmentdetail>("msdyn_msdyn_resourceassignment_msdyn_resourceassignmentdetail_resourceassignmentid", this.msdyn_msdyn_resourceassignment_msdyn_resourceassignmentdetail_resourceassignmentid);
        writer.writeStringValue("msdyn_msprojectclientid", this.msdyn_msprojectclientid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_plannedcost", this.msdyn_plannedcost);
        writer.writeNumberValue("msdyn_plannedcost_base", this.msdyn_plannedcost_base);
        writer.writeStringValue("msdyn_plannedcostcontour", this.msdyn_plannedcostcontour);
        writer.writeNumberValue("msdyn_plannedsales", this.msdyn_plannedsales);
        writer.writeNumberValue("msdyn_plannedsales_base", this.msdyn_plannedsales_base);
        writer.writeStringValue("msdyn_plannedsalescontour", this.msdyn_plannedsalescontour);
        writer.writeStringValue("msdyn_plannedwork", this.msdyn_plannedwork);
        writer.writeObjectValue<Msdyn_project>("msdyn_projectid", this.msdyn_projectid);
        writer.writeObjectValue<Msdyn_projectteam>("msdyn_projectteamid", this.msdyn_projectteamid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_resourceassignment_AsyncOperations", this.msdyn_resourceassignment_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_resourceassignment_BulkDeleteFailures", this.msdyn_resourceassignment_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_resourceassignment_MailboxTrackingFolders", this.msdyn_resourceassignment_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_resourceassignment_PrincipalObjectAttributeAccesses", this.msdyn_resourceassignment_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_resourceassignment_ProcessSession", this.msdyn_resourceassignment_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_resourceassignment_SyncErrors", this.msdyn_resourceassignment_SyncErrors);
        writer.writeStringValue("msdyn_resourceassignmentid", this.msdyn_resourceassignmentid);
        writer.writeObjectValue<Msdyn_projecttask>("msdyn_taskid", this.msdyn_taskid);
        writer.writeDateValue("msdyn_todate", this.msdyn_todate);
        writer.writeObjectValue<Systemuser>("msdyn_userresourceid", this.msdyn_userresourceid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
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
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
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
