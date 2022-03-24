import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcebookingFromDiscriminatorValue} from './createBookableresourcebookingFromDiscriminatorValue';
import {createBookableresourcebookingheaderFromDiscriminatorValue} from './createBookableresourcebookingheaderFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_bookingsetupmetadataFromDiscriminatorValue} from './createMsdyn_bookingsetupmetadataFromDiscriminatorValue';
import {createMsdyn_bookingtimestampFromDiscriminatorValue} from './createMsdyn_bookingtimestampFromDiscriminatorValue';
import {createMsdyn_fieldservicesettingFromDiscriminatorValue} from './createMsdyn_fieldservicesettingFromDiscriminatorValue';
import {createMsdyn_resourceassignmentFromDiscriminatorValue} from './createMsdyn_resourceassignmentFromDiscriminatorValue';
import {createMsdyn_timeentryFromDiscriminatorValue} from './createMsdyn_timeentryFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bookableresourcebooking, Bookableresourcebookingheader, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_bookingsetupmetadata, Msdyn_bookingtimestamp, Msdyn_fieldservicesetting, Msdyn_resourceassignment, Msdyn_timeentry, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Bookingstatus extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _bookingstatus_AsyncOperations?: Asyncoperation[] | undefined;
    private _bookingstatus_bookableresourcebooking_BookingStatus?: Bookableresourcebooking[] | undefined;
    private _bookingstatus_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _bookingstatus_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _bookingstatus_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _bookingstatus_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _bookingstatus_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _bookingstatus_ProcessSession?: Processsession[] | undefined;
    private _bookingStatus_SyncErrors?: Syncerror[] | undefined;
    private _bookingstatusid?: string | undefined;
    private _createdbyname?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfbyname?: Systemuser | undefined;
    private _description?: string | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedbyname?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfbyname?: Systemuser | undefined;
    private _msdyn_bookingstatus_bookableresourcebookingheader_bookingstatusid?: Bookableresourcebookingheader[] | undefined;
    private _msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCanceledStatus?: Msdyn_bookingsetupmetadata[] | undefined;
    private _msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCommittedStatus?: Msdyn_bookingsetupmetadata[] | undefined;
    private _msdyn_bookingstatus_msdyn_bookingtimestamp_BookingStatus?: Msdyn_bookingtimestamp[] | undefined;
    private _msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultCanceledBookingStatus?: Msdyn_fieldservicesetting[] | undefined;
    private _msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultScheduledBookingStatus?: Msdyn_fieldservicesetting[] | undefined;
    private _msdyn_bookingstatus_msdyn_resourceassignment_bookingstatusid?: Msdyn_resourceassignment[] | undefined;
    private _msdyn_bookingstatus_msdyn_timeentry_BookingStatus?: Msdyn_timeentry[] | undefined;
    private _msdyn_committype?: number | undefined;
    private _msdyn_fieldservicestatus?: number | undefined;
    private _msdyn_imageurl?: string | undefined;
    private _msdyn_internalflags?: string | undefined;
    private _msdyn_serviceappointmentstatus?: number | undefined;
    private _msdyn_statuscolor?: string | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _status?: number | undefined;
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
     * Gets the bookingstatus_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get bookingstatus_AsyncOperations() {
        return this._bookingstatus_AsyncOperations;
    };
    /**
     * Sets the bookingstatus_AsyncOperations property value. 
     * @param value Value to set for the bookingstatus_AsyncOperations property.
     */
    public set bookingstatus_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._bookingstatus_AsyncOperations = value;
    };
    /**
     * Gets the bookingstatus_bookableresourcebooking_BookingStatus property value. 
     * @returns a bookableresourcebooking
     */
    public get bookingstatus_bookableresourcebooking_BookingStatus() {
        return this._bookingstatus_bookableresourcebooking_BookingStatus;
    };
    /**
     * Sets the bookingstatus_bookableresourcebooking_BookingStatus property value. 
     * @param value Value to set for the bookingstatus_bookableresourcebooking_BookingStatus property.
     */
    public set bookingstatus_bookableresourcebooking_BookingStatus(value: Bookableresourcebooking[] | undefined) {
        this._bookingstatus_bookableresourcebooking_BookingStatus = value;
    };
    /**
     * Gets the bookingstatus_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get bookingstatus_BulkDeleteFailures() {
        return this._bookingstatus_BulkDeleteFailures;
    };
    /**
     * Sets the bookingstatus_BulkDeleteFailures property value. 
     * @param value Value to set for the bookingstatus_BulkDeleteFailures property.
     */
    public set bookingstatus_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._bookingstatus_BulkDeleteFailures = value;
    };
    /**
     * Gets the bookingstatus_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get bookingstatus_DuplicateBaseRecord() {
        return this._bookingstatus_DuplicateBaseRecord;
    };
    /**
     * Sets the bookingstatus_DuplicateBaseRecord property value. 
     * @param value Value to set for the bookingstatus_DuplicateBaseRecord property.
     */
    public set bookingstatus_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._bookingstatus_DuplicateBaseRecord = value;
    };
    /**
     * Gets the bookingstatus_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get bookingstatus_DuplicateMatchingRecord() {
        return this._bookingstatus_DuplicateMatchingRecord;
    };
    /**
     * Sets the bookingstatus_DuplicateMatchingRecord property value. 
     * @param value Value to set for the bookingstatus_DuplicateMatchingRecord property.
     */
    public set bookingstatus_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._bookingstatus_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the bookingstatus_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get bookingstatus_MailboxTrackingFolders() {
        return this._bookingstatus_MailboxTrackingFolders;
    };
    /**
     * Sets the bookingstatus_MailboxTrackingFolders property value. 
     * @param value Value to set for the bookingstatus_MailboxTrackingFolders property.
     */
    public set bookingstatus_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._bookingstatus_MailboxTrackingFolders = value;
    };
    /**
     * Gets the bookingstatus_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get bookingstatus_PrincipalObjectAttributeAccesses() {
        return this._bookingstatus_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the bookingstatus_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the bookingstatus_PrincipalObjectAttributeAccesses property.
     */
    public set bookingstatus_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._bookingstatus_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the bookingstatus_ProcessSession property value. 
     * @returns a processsession
     */
    public get bookingstatus_ProcessSession() {
        return this._bookingstatus_ProcessSession;
    };
    /**
     * Sets the bookingstatus_ProcessSession property value. 
     * @param value Value to set for the bookingstatus_ProcessSession property.
     */
    public set bookingstatus_ProcessSession(value: Processsession[] | undefined) {
        this._bookingstatus_ProcessSession = value;
    };
    /**
     * Gets the bookingStatus_SyncErrors property value. 
     * @returns a syncerror
     */
    public get bookingStatus_SyncErrors() {
        return this._bookingStatus_SyncErrors;
    };
    /**
     * Sets the bookingStatus_SyncErrors property value. 
     * @param value Value to set for the BookingStatus_SyncErrors property.
     */
    public set bookingStatus_SyncErrors(value: Syncerror[] | undefined) {
        this._bookingStatus_SyncErrors = value;
    };
    /**
     * Gets the bookingstatusid property value. 
     * @returns a string
     */
    public get bookingstatusid() {
        return this._bookingstatusid;
    };
    /**
     * Sets the bookingstatusid property value. 
     * @param value Value to set for the bookingstatusid property.
     */
    public set bookingstatusid(value: string | undefined) {
        this._bookingstatusid = value;
    };
    /**
     * Instantiates a new bookingstatus and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdbyname property value. 
     * @returns a systemuser
     */
    public get createdbyname() {
        return this._createdbyname;
    };
    /**
     * Sets the createdbyname property value. 
     * @param value Value to set for the createdbyname property.
     */
    public set createdbyname(value: Systemuser | undefined) {
        this._createdbyname = value;
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
     * Gets the createdonbehalfbyname property value. 
     * @returns a systemuser
     */
    public get createdonbehalfbyname() {
        return this._createdonbehalfbyname;
    };
    /**
     * Sets the createdonbehalfbyname property value. 
     * @param value Value to set for the createdonbehalfbyname property.
     */
    public set createdonbehalfbyname(value: Systemuser | undefined) {
        this._createdonbehalfbyname = value;
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
            "_createdby_value": (o, n) => { (o as unknown as Bookingstatus)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Bookingstatus)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Bookingstatus)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Bookingstatus)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Bookingstatus)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Bookingstatus)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Bookingstatus)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Bookingstatus)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Bookingstatus)._transactioncurrencyid_value = n.getStringValue(); },
            "bookingstatus_AsyncOperations": (o, n) => { (o as unknown as Bookingstatus).bookingstatus_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "bookingstatus_bookableresourcebooking_BookingStatus": (o, n) => { (o as unknown as Bookingstatus).bookingstatus_bookableresourcebooking_BookingStatus = n.getCollectionOfObjectValues<Bookableresourcebooking>(createBookableresourcebookingFromDiscriminatorValue); },
            "bookingstatus_BulkDeleteFailures": (o, n) => { (o as unknown as Bookingstatus).bookingstatus_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "bookingstatus_DuplicateBaseRecord": (o, n) => { (o as unknown as Bookingstatus).bookingstatus_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "bookingstatus_DuplicateMatchingRecord": (o, n) => { (o as unknown as Bookingstatus).bookingstatus_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "bookingstatus_MailboxTrackingFolders": (o, n) => { (o as unknown as Bookingstatus).bookingstatus_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "bookingstatus_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Bookingstatus).bookingstatus_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "bookingstatus_ProcessSession": (o, n) => { (o as unknown as Bookingstatus).bookingstatus_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "bookingStatus_SyncErrors": (o, n) => { (o as unknown as Bookingstatus).bookingStatus_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "bookingstatusid": (o, n) => { (o as unknown as Bookingstatus).bookingstatusid = n.getStringValue(); },
            "createdbyname": (o, n) => { (o as unknown as Bookingstatus).createdbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Bookingstatus).createdon = n.getDateValue(); },
            "createdonbehalfbyname": (o, n) => { (o as unknown as Bookingstatus).createdonbehalfbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Bookingstatus).description = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Bookingstatus).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Bookingstatus).importsequencenumber = n.getNumberValue(); },
            "modifiedbyname": (o, n) => { (o as unknown as Bookingstatus).modifiedbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Bookingstatus).modifiedon = n.getDateValue(); },
            "modifiedonbehalfbyname": (o, n) => { (o as unknown as Bookingstatus).modifiedonbehalfbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_bookingstatus_bookableresourcebookingheader_bookingstatusid": (o, n) => { (o as unknown as Bookingstatus).msdyn_bookingstatus_bookableresourcebookingheader_bookingstatusid = n.getCollectionOfObjectValues<Bookableresourcebookingheader>(createBookableresourcebookingheaderFromDiscriminatorValue); },
            "msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCanceledStatus": (o, n) => { (o as unknown as Bookingstatus).msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCanceledStatus = n.getCollectionOfObjectValues<Msdyn_bookingsetupmetadata>(createMsdyn_bookingsetupmetadataFromDiscriminatorValue); },
            "msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCommittedStatus": (o, n) => { (o as unknown as Bookingstatus).msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCommittedStatus = n.getCollectionOfObjectValues<Msdyn_bookingsetupmetadata>(createMsdyn_bookingsetupmetadataFromDiscriminatorValue); },
            "msdyn_bookingstatus_msdyn_bookingtimestamp_BookingStatus": (o, n) => { (o as unknown as Bookingstatus).msdyn_bookingstatus_msdyn_bookingtimestamp_BookingStatus = n.getCollectionOfObjectValues<Msdyn_bookingtimestamp>(createMsdyn_bookingtimestampFromDiscriminatorValue); },
            "msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultCanceledBookingStatus": (o, n) => { (o as unknown as Bookingstatus).msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultCanceledBookingStatus = n.getCollectionOfObjectValues<Msdyn_fieldservicesetting>(createMsdyn_fieldservicesettingFromDiscriminatorValue); },
            "msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultScheduledBookingStatus": (o, n) => { (o as unknown as Bookingstatus).msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultScheduledBookingStatus = n.getCollectionOfObjectValues<Msdyn_fieldservicesetting>(createMsdyn_fieldservicesettingFromDiscriminatorValue); },
            "msdyn_bookingstatus_msdyn_resourceassignment_bookingstatusid": (o, n) => { (o as unknown as Bookingstatus).msdyn_bookingstatus_msdyn_resourceassignment_bookingstatusid = n.getCollectionOfObjectValues<Msdyn_resourceassignment>(createMsdyn_resourceassignmentFromDiscriminatorValue); },
            "msdyn_bookingstatus_msdyn_timeentry_BookingStatus": (o, n) => { (o as unknown as Bookingstatus).msdyn_bookingstatus_msdyn_timeentry_BookingStatus = n.getCollectionOfObjectValues<Msdyn_timeentry>(createMsdyn_timeentryFromDiscriminatorValue); },
            "msdyn_committype": (o, n) => { (o as unknown as Bookingstatus).msdyn_committype = n.getNumberValue(); },
            "msdyn_fieldservicestatus": (o, n) => { (o as unknown as Bookingstatus).msdyn_fieldservicestatus = n.getNumberValue(); },
            "msdyn_imageurl": (o, n) => { (o as unknown as Bookingstatus).msdyn_imageurl = n.getStringValue(); },
            "msdyn_internalflags": (o, n) => { (o as unknown as Bookingstatus).msdyn_internalflags = n.getStringValue(); },
            "msdyn_serviceappointmentstatus": (o, n) => { (o as unknown as Bookingstatus).msdyn_serviceappointmentstatus = n.getNumberValue(); },
            "msdyn_statuscolor": (o, n) => { (o as unknown as Bookingstatus).msdyn_statuscolor = n.getStringValue(); },
            "name": (o, n) => { (o as unknown as Bookingstatus).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Bookingstatus).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Bookingstatus).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Bookingstatus).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Bookingstatus).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Bookingstatus).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Bookingstatus).statecode = n.getNumberValue(); },
            "status": (o, n) => { (o as unknown as Bookingstatus).status = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Bookingstatus).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Bookingstatus).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Bookingstatus).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Bookingstatus).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Bookingstatus).versionnumber = n.getNumberValue(); },
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
     * Gets the modifiedbyname property value. 
     * @returns a systemuser
     */
    public get modifiedbyname() {
        return this._modifiedbyname;
    };
    /**
     * Sets the modifiedbyname property value. 
     * @param value Value to set for the modifiedbyname property.
     */
    public set modifiedbyname(value: Systemuser | undefined) {
        this._modifiedbyname = value;
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
     * Gets the modifiedonbehalfbyname property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfbyname() {
        return this._modifiedonbehalfbyname;
    };
    /**
     * Sets the modifiedonbehalfbyname property value. 
     * @param value Value to set for the modifiedonbehalfbyname property.
     */
    public set modifiedonbehalfbyname(value: Systemuser | undefined) {
        this._modifiedonbehalfbyname = value;
    };
    /**
     * Gets the msdyn_bookingstatus_bookableresourcebookingheader_bookingstatusid property value. 
     * @returns a bookableresourcebookingheader
     */
    public get msdyn_bookingstatus_bookableresourcebookingheader_bookingstatusid() {
        return this._msdyn_bookingstatus_bookableresourcebookingheader_bookingstatusid;
    };
    /**
     * Sets the msdyn_bookingstatus_bookableresourcebookingheader_bookingstatusid property value. 
     * @param value Value to set for the msdyn_bookingstatus_bookableresourcebookingheader_bookingstatusid property.
     */
    public set msdyn_bookingstatus_bookableresourcebookingheader_bookingstatusid(value: Bookableresourcebookingheader[] | undefined) {
        this._msdyn_bookingstatus_bookableresourcebookingheader_bookingstatusid = value;
    };
    /**
     * Gets the msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCanceledStatus property value. 
     * @returns a msdyn_bookingsetupmetadata
     */
    public get msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCanceledStatus() {
        return this._msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCanceledStatus;
    };
    /**
     * Sets the msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCanceledStatus property value. 
     * @param value Value to set for the msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCanceledStatus property.
     */
    public set msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCanceledStatus(value: Msdyn_bookingsetupmetadata[] | undefined) {
        this._msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCanceledStatus = value;
    };
    /**
     * Gets the msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCommittedStatus property value. 
     * @returns a msdyn_bookingsetupmetadata
     */
    public get msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCommittedStatus() {
        return this._msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCommittedStatus;
    };
    /**
     * Sets the msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCommittedStatus property value. 
     * @param value Value to set for the msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCommittedStatus property.
     */
    public set msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCommittedStatus(value: Msdyn_bookingsetupmetadata[] | undefined) {
        this._msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCommittedStatus = value;
    };
    /**
     * Gets the msdyn_bookingstatus_msdyn_bookingtimestamp_BookingStatus property value. 
     * @returns a msdyn_bookingtimestamp
     */
    public get msdyn_bookingstatus_msdyn_bookingtimestamp_BookingStatus() {
        return this._msdyn_bookingstatus_msdyn_bookingtimestamp_BookingStatus;
    };
    /**
     * Sets the msdyn_bookingstatus_msdyn_bookingtimestamp_BookingStatus property value. 
     * @param value Value to set for the msdyn_bookingstatus_msdyn_bookingtimestamp_BookingStatus property.
     */
    public set msdyn_bookingstatus_msdyn_bookingtimestamp_BookingStatus(value: Msdyn_bookingtimestamp[] | undefined) {
        this._msdyn_bookingstatus_msdyn_bookingtimestamp_BookingStatus = value;
    };
    /**
     * Gets the msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultCanceledBookingStatus property value. 
     * @returns a msdyn_fieldservicesetting
     */
    public get msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultCanceledBookingStatus() {
        return this._msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultCanceledBookingStatus;
    };
    /**
     * Sets the msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultCanceledBookingStatus property value. 
     * @param value Value to set for the msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultCanceledBookingStatus property.
     */
    public set msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultCanceledBookingStatus(value: Msdyn_fieldservicesetting[] | undefined) {
        this._msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultCanceledBookingStatus = value;
    };
    /**
     * Gets the msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultScheduledBookingStatus property value. 
     * @returns a msdyn_fieldservicesetting
     */
    public get msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultScheduledBookingStatus() {
        return this._msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultScheduledBookingStatus;
    };
    /**
     * Sets the msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultScheduledBookingStatus property value. 
     * @param value Value to set for the msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultScheduledBookingStatus property.
     */
    public set msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultScheduledBookingStatus(value: Msdyn_fieldservicesetting[] | undefined) {
        this._msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultScheduledBookingStatus = value;
    };
    /**
     * Gets the msdyn_bookingstatus_msdyn_resourceassignment_bookingstatusid property value. 
     * @returns a msdyn_resourceassignment
     */
    public get msdyn_bookingstatus_msdyn_resourceassignment_bookingstatusid() {
        return this._msdyn_bookingstatus_msdyn_resourceassignment_bookingstatusid;
    };
    /**
     * Sets the msdyn_bookingstatus_msdyn_resourceassignment_bookingstatusid property value. 
     * @param value Value to set for the msdyn_bookingstatus_msdyn_resourceassignment_bookingstatusid property.
     */
    public set msdyn_bookingstatus_msdyn_resourceassignment_bookingstatusid(value: Msdyn_resourceassignment[] | undefined) {
        this._msdyn_bookingstatus_msdyn_resourceassignment_bookingstatusid = value;
    };
    /**
     * Gets the msdyn_bookingstatus_msdyn_timeentry_BookingStatus property value. 
     * @returns a msdyn_timeentry
     */
    public get msdyn_bookingstatus_msdyn_timeentry_BookingStatus() {
        return this._msdyn_bookingstatus_msdyn_timeentry_BookingStatus;
    };
    /**
     * Sets the msdyn_bookingstatus_msdyn_timeentry_BookingStatus property value. 
     * @param value Value to set for the msdyn_bookingstatus_msdyn_timeentry_BookingStatus property.
     */
    public set msdyn_bookingstatus_msdyn_timeentry_BookingStatus(value: Msdyn_timeentry[] | undefined) {
        this._msdyn_bookingstatus_msdyn_timeentry_BookingStatus = value;
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
     * Gets the msdyn_fieldservicestatus property value. 
     * @returns a integer
     */
    public get msdyn_fieldservicestatus() {
        return this._msdyn_fieldservicestatus;
    };
    /**
     * Sets the msdyn_fieldservicestatus property value. 
     * @param value Value to set for the msdyn_fieldservicestatus property.
     */
    public set msdyn_fieldservicestatus(value: number | undefined) {
        this._msdyn_fieldservicestatus = value;
    };
    /**
     * Gets the msdyn_imageurl property value. 
     * @returns a string
     */
    public get msdyn_imageurl() {
        return this._msdyn_imageurl;
    };
    /**
     * Sets the msdyn_imageurl property value. 
     * @param value Value to set for the msdyn_imageurl property.
     */
    public set msdyn_imageurl(value: string | undefined) {
        this._msdyn_imageurl = value;
    };
    /**
     * Gets the msdyn_internalflags property value. 
     * @returns a string
     */
    public get msdyn_internalflags() {
        return this._msdyn_internalflags;
    };
    /**
     * Sets the msdyn_internalflags property value. 
     * @param value Value to set for the msdyn_internalflags property.
     */
    public set msdyn_internalflags(value: string | undefined) {
        this._msdyn_internalflags = value;
    };
    /**
     * Gets the msdyn_serviceappointmentstatus property value. 
     * @returns a integer
     */
    public get msdyn_serviceappointmentstatus() {
        return this._msdyn_serviceappointmentstatus;
    };
    /**
     * Sets the msdyn_serviceappointmentstatus property value. 
     * @param value Value to set for the msdyn_serviceappointmentstatus property.
     */
    public set msdyn_serviceappointmentstatus(value: number | undefined) {
        this._msdyn_serviceappointmentstatus = value;
    };
    /**
     * Gets the msdyn_statuscolor property value. 
     * @returns a string
     */
    public get msdyn_statuscolor() {
        return this._msdyn_statuscolor;
    };
    /**
     * Sets the msdyn_statuscolor property value. 
     * @param value Value to set for the msdyn_statuscolor property.
     */
    public set msdyn_statuscolor(value: string | undefined) {
        this._msdyn_statuscolor = value;
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
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeCollectionOfObjectValues<Asyncoperation>("bookingstatus_AsyncOperations", this.bookingstatus_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bookableresourcebooking>("bookingstatus_bookableresourcebooking_BookingStatus", this.bookingstatus_bookableresourcebooking_BookingStatus);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("bookingstatus_BulkDeleteFailures", this.bookingstatus_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("bookingstatus_DuplicateBaseRecord", this.bookingstatus_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("bookingstatus_DuplicateMatchingRecord", this.bookingstatus_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("bookingstatus_MailboxTrackingFolders", this.bookingstatus_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("bookingstatus_PrincipalObjectAttributeAccesses", this.bookingstatus_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("bookingstatus_ProcessSession", this.bookingstatus_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("bookingStatus_SyncErrors", this.bookingStatus_SyncErrors);
        writer.writeStringValue("bookingstatusid", this.bookingstatusid);
        writer.writeObjectValue<Systemuser>("createdbyname", this.createdbyname);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfbyname", this.createdonbehalfbyname);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedbyname", this.modifiedbyname);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfbyname", this.modifiedonbehalfbyname);
        writer.writeCollectionOfObjectValues<Bookableresourcebookingheader>("msdyn_bookingstatus_bookableresourcebookingheader_bookingstatusid", this.msdyn_bookingstatus_bookableresourcebookingheader_bookingstatusid);
        writer.writeCollectionOfObjectValues<Msdyn_bookingsetupmetadata>("msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCanceledStatus", this.msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCanceledStatus);
        writer.writeCollectionOfObjectValues<Msdyn_bookingsetupmetadata>("msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCommittedStatus", this.msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCommittedStatus);
        writer.writeCollectionOfObjectValues<Msdyn_bookingtimestamp>("msdyn_bookingstatus_msdyn_bookingtimestamp_BookingStatus", this.msdyn_bookingstatus_msdyn_bookingtimestamp_BookingStatus);
        writer.writeCollectionOfObjectValues<Msdyn_fieldservicesetting>("msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultCanceledBookingStatus", this.msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultCanceledBookingStatus);
        writer.writeCollectionOfObjectValues<Msdyn_fieldservicesetting>("msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultScheduledBookingStatus", this.msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultScheduledBookingStatus);
        writer.writeCollectionOfObjectValues<Msdyn_resourceassignment>("msdyn_bookingstatus_msdyn_resourceassignment_bookingstatusid", this.msdyn_bookingstatus_msdyn_resourceassignment_bookingstatusid);
        writer.writeCollectionOfObjectValues<Msdyn_timeentry>("msdyn_bookingstatus_msdyn_timeentry_BookingStatus", this.msdyn_bookingstatus_msdyn_timeentry_BookingStatus);
        writer.writeNumberValue("msdyn_committype", this.msdyn_committype);
        writer.writeNumberValue("msdyn_fieldservicestatus", this.msdyn_fieldservicestatus);
        writer.writeStringValue("msdyn_imageurl", this.msdyn_imageurl);
        writer.writeStringValue("msdyn_internalflags", this.msdyn_internalflags);
        writer.writeNumberValue("msdyn_serviceappointmentstatus", this.msdyn_serviceappointmentstatus);
        writer.writeStringValue("msdyn_statuscolor", this.msdyn_statuscolor);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("status", this.status);
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
     * Gets the status property value. 
     * @returns a integer
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. 
     * @param value Value to set for the status property.
     */
    public set status(value: number | undefined) {
        this._status = value;
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
