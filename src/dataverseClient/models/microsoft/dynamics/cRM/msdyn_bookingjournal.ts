import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcebookingFromDiscriminatorValue} from './createBookableresourcebookingFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_resourcepaytypeFromDiscriminatorValue} from './createMsdyn_resourcepaytypeFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bookableresourcebooking, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msdyn_resourcepaytype, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_bookingjournal extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_booking_value?: string | undefined;
    private __msdyn_paytype_value?: string | undefined;
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
    private _msdyn_additionalcost?: number | undefined;
    private _msdyn_additionalcost_base?: number | undefined;
    private _msdyn_billable?: boolean | undefined;
    private _msdyn_booking?: Bookableresourcebooking | undefined;
    private _msdyn_bookingjournal_Annotations?: Annotation[] | undefined;
    private _msdyn_bookingjournal_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_bookingjournal_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_bookingjournal_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_bookingjournal_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_bookingjournal_ProcessSession?: Processsession[] | undefined;
    private _msdyn_bookingjournal_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_bookingjournalid?: string | undefined;
    private _msdyn_duration?: number | undefined;
    private _msdyn_endtime?: Date | undefined;
    private _msdyn_journaltype?: number | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_paytype?: Msdyn_resourcepaytype | undefined;
    private _msdyn_starttime?: Date | undefined;
    private _msdyn_totalcost?: number | undefined;
    private _msdyn_totalcost_base?: number | undefined;
    private _msdyn_unitcost?: number | undefined;
    private _msdyn_unitcost_base?: number | undefined;
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
     * Gets the _msdyn_booking_value property value. 
     * @returns a string
     */
    public get _msdyn_booking_value() {
        return this.__msdyn_booking_value;
    };
    /**
     * Sets the _msdyn_booking_value property value. 
     * @param value Value to set for the _msdyn_booking_value property.
     */
    public set _msdyn_booking_value(value: string | undefined) {
        this.__msdyn_booking_value = value;
    };
    /**
     * Gets the _msdyn_paytype_value property value. 
     * @returns a string
     */
    public get _msdyn_paytype_value() {
        return this.__msdyn_paytype_value;
    };
    /**
     * Sets the _msdyn_paytype_value property value. 
     * @param value Value to set for the _msdyn_paytype_value property.
     */
    public set _msdyn_paytype_value(value: string | undefined) {
        this.__msdyn_paytype_value = value;
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
     * Instantiates a new msdyn_bookingjournal and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_bookingjournal)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_bookingjournal)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_bookingjournal)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_bookingjournal)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_booking_value": (o, n) => { (o as unknown as Msdyn_bookingjournal)._msdyn_booking_value = n.getStringValue(); },
            "_msdyn_paytype_value": (o, n) => { (o as unknown as Msdyn_bookingjournal)._msdyn_paytype_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_bookingjournal)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_bookingjournal)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_bookingjournal)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_bookingjournal)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_bookingjournal)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_bookingjournal).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_bookingjournal).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_bookingjournal).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_bookingjournal).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_bookingjournal).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_bookingjournal).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_bookingjournal).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_bookingjournal).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_additionalcost": (o, n) => { (o as unknown as Msdyn_bookingjournal).msdyn_additionalcost = n.getNumberValue(); },
            "msdyn_additionalcost_base": (o, n) => { (o as unknown as Msdyn_bookingjournal).msdyn_additionalcost_base = n.getNumberValue(); },
            "msdyn_billable": (o, n) => { (o as unknown as Msdyn_bookingjournal).msdyn_billable = n.getBooleanValue(); },
            "msdyn_booking": (o, n) => { (o as unknown as Msdyn_bookingjournal).msdyn_booking = n.getObjectValue<Bookableresourcebooking>(createBookableresourcebookingFromDiscriminatorValue); },
            "msdyn_bookingjournal_Annotations": (o, n) => { (o as unknown as Msdyn_bookingjournal).msdyn_bookingjournal_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_bookingjournal_AsyncOperations": (o, n) => { (o as unknown as Msdyn_bookingjournal).msdyn_bookingjournal_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_bookingjournal_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_bookingjournal).msdyn_bookingjournal_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_bookingjournal_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_bookingjournal).msdyn_bookingjournal_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_bookingjournal_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_bookingjournal).msdyn_bookingjournal_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_bookingjournal_ProcessSession": (o, n) => { (o as unknown as Msdyn_bookingjournal).msdyn_bookingjournal_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_bookingjournal_SyncErrors": (o, n) => { (o as unknown as Msdyn_bookingjournal).msdyn_bookingjournal_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_bookingjournalid": (o, n) => { (o as unknown as Msdyn_bookingjournal).msdyn_bookingjournalid = n.getStringValue(); },
            "msdyn_duration": (o, n) => { (o as unknown as Msdyn_bookingjournal).msdyn_duration = n.getNumberValue(); },
            "msdyn_endtime": (o, n) => { (o as unknown as Msdyn_bookingjournal).msdyn_endtime = n.getDateValue(); },
            "msdyn_journaltype": (o, n) => { (o as unknown as Msdyn_bookingjournal).msdyn_journaltype = n.getNumberValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_bookingjournal).msdyn_name = n.getStringValue(); },
            "msdyn_paytype": (o, n) => { (o as unknown as Msdyn_bookingjournal).msdyn_paytype = n.getObjectValue<Msdyn_resourcepaytype>(createMsdyn_resourcepaytypeFromDiscriminatorValue); },
            "msdyn_starttime": (o, n) => { (o as unknown as Msdyn_bookingjournal).msdyn_starttime = n.getDateValue(); },
            "msdyn_totalcost": (o, n) => { (o as unknown as Msdyn_bookingjournal).msdyn_totalcost = n.getNumberValue(); },
            "msdyn_totalcost_base": (o, n) => { (o as unknown as Msdyn_bookingjournal).msdyn_totalcost_base = n.getNumberValue(); },
            "msdyn_unitcost": (o, n) => { (o as unknown as Msdyn_bookingjournal).msdyn_unitcost = n.getNumberValue(); },
            "msdyn_unitcost_base": (o, n) => { (o as unknown as Msdyn_bookingjournal).msdyn_unitcost_base = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_bookingjournal).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_bookingjournal).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_bookingjournal).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_bookingjournal).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_bookingjournal).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_bookingjournal).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_bookingjournal).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_bookingjournal).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_bookingjournal).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_bookingjournal).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_bookingjournal).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_additionalcost property value. 
     * @returns a int64
     */
    public get msdyn_additionalcost() {
        return this._msdyn_additionalcost;
    };
    /**
     * Sets the msdyn_additionalcost property value. 
     * @param value Value to set for the msdyn_additionalcost property.
     */
    public set msdyn_additionalcost(value: number | undefined) {
        this._msdyn_additionalcost = value;
    };
    /**
     * Gets the msdyn_additionalcost_base property value. 
     * @returns a int64
     */
    public get msdyn_additionalcost_base() {
        return this._msdyn_additionalcost_base;
    };
    /**
     * Sets the msdyn_additionalcost_base property value. 
     * @param value Value to set for the msdyn_additionalcost_base property.
     */
    public set msdyn_additionalcost_base(value: number | undefined) {
        this._msdyn_additionalcost_base = value;
    };
    /**
     * Gets the msdyn_billable property value. 
     * @returns a boolean
     */
    public get msdyn_billable() {
        return this._msdyn_billable;
    };
    /**
     * Sets the msdyn_billable property value. 
     * @param value Value to set for the msdyn_billable property.
     */
    public set msdyn_billable(value: boolean | undefined) {
        this._msdyn_billable = value;
    };
    /**
     * Gets the msdyn_booking property value. 
     * @returns a bookableresourcebooking
     */
    public get msdyn_booking() {
        return this._msdyn_booking;
    };
    /**
     * Sets the msdyn_booking property value. 
     * @param value Value to set for the msdyn_booking property.
     */
    public set msdyn_booking(value: Bookableresourcebooking | undefined) {
        this._msdyn_booking = value;
    };
    /**
     * Gets the msdyn_bookingjournal_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_bookingjournal_Annotations() {
        return this._msdyn_bookingjournal_Annotations;
    };
    /**
     * Sets the msdyn_bookingjournal_Annotations property value. 
     * @param value Value to set for the msdyn_bookingjournal_Annotations property.
     */
    public set msdyn_bookingjournal_Annotations(value: Annotation[] | undefined) {
        this._msdyn_bookingjournal_Annotations = value;
    };
    /**
     * Gets the msdyn_bookingjournal_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_bookingjournal_AsyncOperations() {
        return this._msdyn_bookingjournal_AsyncOperations;
    };
    /**
     * Sets the msdyn_bookingjournal_AsyncOperations property value. 
     * @param value Value to set for the msdyn_bookingjournal_AsyncOperations property.
     */
    public set msdyn_bookingjournal_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_bookingjournal_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_bookingjournal_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_bookingjournal_BulkDeleteFailures() {
        return this._msdyn_bookingjournal_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_bookingjournal_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_bookingjournal_BulkDeleteFailures property.
     */
    public set msdyn_bookingjournal_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_bookingjournal_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_bookingjournal_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_bookingjournal_MailboxTrackingFolders() {
        return this._msdyn_bookingjournal_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_bookingjournal_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_bookingjournal_MailboxTrackingFolders property.
     */
    public set msdyn_bookingjournal_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_bookingjournal_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_bookingjournal_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_bookingjournal_PrincipalObjectAttributeAccesses() {
        return this._msdyn_bookingjournal_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_bookingjournal_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_bookingjournal_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_bookingjournal_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_bookingjournal_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_bookingjournal_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_bookingjournal_ProcessSession() {
        return this._msdyn_bookingjournal_ProcessSession;
    };
    /**
     * Sets the msdyn_bookingjournal_ProcessSession property value. 
     * @param value Value to set for the msdyn_bookingjournal_ProcessSession property.
     */
    public set msdyn_bookingjournal_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_bookingjournal_ProcessSession = value;
    };
    /**
     * Gets the msdyn_bookingjournal_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_bookingjournal_SyncErrors() {
        return this._msdyn_bookingjournal_SyncErrors;
    };
    /**
     * Sets the msdyn_bookingjournal_SyncErrors property value. 
     * @param value Value to set for the msdyn_bookingjournal_SyncErrors property.
     */
    public set msdyn_bookingjournal_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_bookingjournal_SyncErrors = value;
    };
    /**
     * Gets the msdyn_bookingjournalid property value. 
     * @returns a string
     */
    public get msdyn_bookingjournalid() {
        return this._msdyn_bookingjournalid;
    };
    /**
     * Sets the msdyn_bookingjournalid property value. 
     * @param value Value to set for the msdyn_bookingjournalid property.
     */
    public set msdyn_bookingjournalid(value: string | undefined) {
        this._msdyn_bookingjournalid = value;
    };
    /**
     * Gets the msdyn_duration property value. 
     * @returns a integer
     */
    public get msdyn_duration() {
        return this._msdyn_duration;
    };
    /**
     * Sets the msdyn_duration property value. 
     * @param value Value to set for the msdyn_duration property.
     */
    public set msdyn_duration(value: number | undefined) {
        this._msdyn_duration = value;
    };
    /**
     * Gets the msdyn_endtime property value. 
     * @returns a Date
     */
    public get msdyn_endtime() {
        return this._msdyn_endtime;
    };
    /**
     * Sets the msdyn_endtime property value. 
     * @param value Value to set for the msdyn_endtime property.
     */
    public set msdyn_endtime(value: Date | undefined) {
        this._msdyn_endtime = value;
    };
    /**
     * Gets the msdyn_journaltype property value. 
     * @returns a integer
     */
    public get msdyn_journaltype() {
        return this._msdyn_journaltype;
    };
    /**
     * Sets the msdyn_journaltype property value. 
     * @param value Value to set for the msdyn_journaltype property.
     */
    public set msdyn_journaltype(value: number | undefined) {
        this._msdyn_journaltype = value;
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
     * Gets the msdyn_paytype property value. 
     * @returns a msdyn_resourcepaytype
     */
    public get msdyn_paytype() {
        return this._msdyn_paytype;
    };
    /**
     * Sets the msdyn_paytype property value. 
     * @param value Value to set for the msdyn_paytype property.
     */
    public set msdyn_paytype(value: Msdyn_resourcepaytype | undefined) {
        this._msdyn_paytype = value;
    };
    /**
     * Gets the msdyn_starttime property value. 
     * @returns a Date
     */
    public get msdyn_starttime() {
        return this._msdyn_starttime;
    };
    /**
     * Sets the msdyn_starttime property value. 
     * @param value Value to set for the msdyn_starttime property.
     */
    public set msdyn_starttime(value: Date | undefined) {
        this._msdyn_starttime = value;
    };
    /**
     * Gets the msdyn_totalcost property value. 
     * @returns a int64
     */
    public get msdyn_totalcost() {
        return this._msdyn_totalcost;
    };
    /**
     * Sets the msdyn_totalcost property value. 
     * @param value Value to set for the msdyn_totalcost property.
     */
    public set msdyn_totalcost(value: number | undefined) {
        this._msdyn_totalcost = value;
    };
    /**
     * Gets the msdyn_totalcost_base property value. 
     * @returns a int64
     */
    public get msdyn_totalcost_base() {
        return this._msdyn_totalcost_base;
    };
    /**
     * Sets the msdyn_totalcost_base property value. 
     * @param value Value to set for the msdyn_totalcost_base property.
     */
    public set msdyn_totalcost_base(value: number | undefined) {
        this._msdyn_totalcost_base = value;
    };
    /**
     * Gets the msdyn_unitcost property value. 
     * @returns a int64
     */
    public get msdyn_unitcost() {
        return this._msdyn_unitcost;
    };
    /**
     * Sets the msdyn_unitcost property value. 
     * @param value Value to set for the msdyn_unitcost property.
     */
    public set msdyn_unitcost(value: number | undefined) {
        this._msdyn_unitcost = value;
    };
    /**
     * Gets the msdyn_unitcost_base property value. 
     * @returns a int64
     */
    public get msdyn_unitcost_base() {
        return this._msdyn_unitcost_base;
    };
    /**
     * Sets the msdyn_unitcost_base property value. 
     * @param value Value to set for the msdyn_unitcost_base property.
     */
    public set msdyn_unitcost_base(value: number | undefined) {
        this._msdyn_unitcost_base = value;
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
        writer.writeStringValue("_msdyn_booking_value", this._msdyn_booking_value);
        writer.writeStringValue("_msdyn_paytype_value", this._msdyn_paytype_value);
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
        writer.writeNumberValue("msdyn_additionalcost", this.msdyn_additionalcost);
        writer.writeNumberValue("msdyn_additionalcost_base", this.msdyn_additionalcost_base);
        writer.writeBooleanValue("msdyn_billable", this.msdyn_billable);
        writer.writeObjectValue<Bookableresourcebooking>("msdyn_booking", this.msdyn_booking);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_bookingjournal_Annotations", this.msdyn_bookingjournal_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_bookingjournal_AsyncOperations", this.msdyn_bookingjournal_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_bookingjournal_BulkDeleteFailures", this.msdyn_bookingjournal_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_bookingjournal_MailboxTrackingFolders", this.msdyn_bookingjournal_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_bookingjournal_PrincipalObjectAttributeAccesses", this.msdyn_bookingjournal_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_bookingjournal_ProcessSession", this.msdyn_bookingjournal_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_bookingjournal_SyncErrors", this.msdyn_bookingjournal_SyncErrors);
        writer.writeStringValue("msdyn_bookingjournalid", this.msdyn_bookingjournalid);
        writer.writeNumberValue("msdyn_duration", this.msdyn_duration);
        writer.writeDateValue("msdyn_endtime", this.msdyn_endtime);
        writer.writeNumberValue("msdyn_journaltype", this.msdyn_journaltype);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Msdyn_resourcepaytype>("msdyn_paytype", this.msdyn_paytype);
        writer.writeDateValue("msdyn_starttime", this.msdyn_starttime);
        writer.writeNumberValue("msdyn_totalcost", this.msdyn_totalcost);
        writer.writeNumberValue("msdyn_totalcost_base", this.msdyn_totalcost_base);
        writer.writeNumberValue("msdyn_unitcost", this.msdyn_unitcost);
        writer.writeNumberValue("msdyn_unitcost_base", this.msdyn_unitcost_base);
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
