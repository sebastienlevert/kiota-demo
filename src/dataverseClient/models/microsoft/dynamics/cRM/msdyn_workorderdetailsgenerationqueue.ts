import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_agreementbookingdateFromDiscriminatorValue} from './createMsdyn_agreementbookingdateFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_agreementbookingdate, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_workorderdetailsgenerationqueue extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_agreementbookingdate_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_agreementbookingdate?: Msdyn_agreementbookingdate | undefined;
    private _msdyn_booking?: string | undefined;
    private _msdyn_exceptionmessage?: string | undefined;
    private _msdyn_exceptiontrace?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_processed?: boolean | undefined;
    private _msdyn_schdateownerid?: string | undefined;
    private _msdyn_workorderdetails?: string | undefined;
    private _msdyn_workorderdetailsgenerationqueue_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_workorderdetailsgenerationqueue_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_workorderdetailsgenerationqueue_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_workorderdetailsgenerationqueue_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_workorderdetailsgenerationqueue_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_workorderdetailsgenerationqueue_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_workorderdetailsgenerationqueue_ProcessSession?: Processsession[] | undefined;
    private _msdyn_workorderdetailsgenerationqueue_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_workorderdetailsgenerationqueueid?: string | undefined;
    private _msdyn_workorderid?: string | undefined;
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
     * Gets the _msdyn_agreementbookingdate_value property value. 
     * @returns a string
     */
    public get _msdyn_agreementbookingdate_value() {
        return this.__msdyn_agreementbookingdate_value;
    };
    /**
     * Sets the _msdyn_agreementbookingdate_value property value. 
     * @param value Value to set for the _msdyn_agreementbookingdate_value property.
     */
    public set _msdyn_agreementbookingdate_value(value: string | undefined) {
        this.__msdyn_agreementbookingdate_value = value;
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
     * Instantiates a new msdyn_workorderdetailsgenerationqueue and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_agreementbookingdate_value": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue)._msdyn_agreementbookingdate_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_agreementbookingdate": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).msdyn_agreementbookingdate = n.getObjectValue<Msdyn_agreementbookingdate>(createMsdyn_agreementbookingdateFromDiscriminatorValue); },
            "msdyn_booking": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).msdyn_booking = n.getStringValue(); },
            "msdyn_exceptionmessage": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).msdyn_exceptionmessage = n.getStringValue(); },
            "msdyn_exceptiontrace": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).msdyn_exceptiontrace = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).msdyn_name = n.getStringValue(); },
            "msdyn_processed": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).msdyn_processed = n.getBooleanValue(); },
            "msdyn_schdateownerid": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).msdyn_schdateownerid = n.getStringValue(); },
            "msdyn_workorderdetails": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).msdyn_workorderdetails = n.getStringValue(); },
            "msdyn_workorderdetailsgenerationqueue_AsyncOperations": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).msdyn_workorderdetailsgenerationqueue_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_workorderdetailsgenerationqueue_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).msdyn_workorderdetailsgenerationqueue_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_workorderdetailsgenerationqueue_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).msdyn_workorderdetailsgenerationqueue_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_workorderdetailsgenerationqueue_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).msdyn_workorderdetailsgenerationqueue_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_workorderdetailsgenerationqueue_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).msdyn_workorderdetailsgenerationqueue_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_workorderdetailsgenerationqueue_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).msdyn_workorderdetailsgenerationqueue_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_workorderdetailsgenerationqueue_ProcessSession": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).msdyn_workorderdetailsgenerationqueue_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_workorderdetailsgenerationqueue_SyncErrors": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).msdyn_workorderdetailsgenerationqueue_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_workorderdetailsgenerationqueueid": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).msdyn_workorderdetailsgenerationqueueid = n.getStringValue(); },
            "msdyn_workorderid": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).msdyn_workorderid = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_workorderdetailsgenerationqueue).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_agreementbookingdate property value. 
     * @returns a msdyn_agreementbookingdate
     */
    public get msdyn_agreementbookingdate() {
        return this._msdyn_agreementbookingdate;
    };
    /**
     * Sets the msdyn_agreementbookingdate property value. 
     * @param value Value to set for the msdyn_agreementbookingdate property.
     */
    public set msdyn_agreementbookingdate(value: Msdyn_agreementbookingdate | undefined) {
        this._msdyn_agreementbookingdate = value;
    };
    /**
     * Gets the msdyn_booking property value. 
     * @returns a string
     */
    public get msdyn_booking() {
        return this._msdyn_booking;
    };
    /**
     * Sets the msdyn_booking property value. 
     * @param value Value to set for the msdyn_booking property.
     */
    public set msdyn_booking(value: string | undefined) {
        this._msdyn_booking = value;
    };
    /**
     * Gets the msdyn_exceptionmessage property value. 
     * @returns a string
     */
    public get msdyn_exceptionmessage() {
        return this._msdyn_exceptionmessage;
    };
    /**
     * Sets the msdyn_exceptionmessage property value. 
     * @param value Value to set for the msdyn_exceptionmessage property.
     */
    public set msdyn_exceptionmessage(value: string | undefined) {
        this._msdyn_exceptionmessage = value;
    };
    /**
     * Gets the msdyn_exceptiontrace property value. 
     * @returns a string
     */
    public get msdyn_exceptiontrace() {
        return this._msdyn_exceptiontrace;
    };
    /**
     * Sets the msdyn_exceptiontrace property value. 
     * @param value Value to set for the msdyn_exceptiontrace property.
     */
    public set msdyn_exceptiontrace(value: string | undefined) {
        this._msdyn_exceptiontrace = value;
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
     * Gets the msdyn_processed property value. 
     * @returns a boolean
     */
    public get msdyn_processed() {
        return this._msdyn_processed;
    };
    /**
     * Sets the msdyn_processed property value. 
     * @param value Value to set for the msdyn_processed property.
     */
    public set msdyn_processed(value: boolean | undefined) {
        this._msdyn_processed = value;
    };
    /**
     * Gets the msdyn_schdateownerid property value. 
     * @returns a string
     */
    public get msdyn_schdateownerid() {
        return this._msdyn_schdateownerid;
    };
    /**
     * Sets the msdyn_schdateownerid property value. 
     * @param value Value to set for the msdyn_schdateownerid property.
     */
    public set msdyn_schdateownerid(value: string | undefined) {
        this._msdyn_schdateownerid = value;
    };
    /**
     * Gets the msdyn_workorderdetails property value. 
     * @returns a string
     */
    public get msdyn_workorderdetails() {
        return this._msdyn_workorderdetails;
    };
    /**
     * Sets the msdyn_workorderdetails property value. 
     * @param value Value to set for the msdyn_workorderdetails property.
     */
    public set msdyn_workorderdetails(value: string | undefined) {
        this._msdyn_workorderdetails = value;
    };
    /**
     * Gets the msdyn_workorderdetailsgenerationqueue_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_workorderdetailsgenerationqueue_AsyncOperations() {
        return this._msdyn_workorderdetailsgenerationqueue_AsyncOperations;
    };
    /**
     * Sets the msdyn_workorderdetailsgenerationqueue_AsyncOperations property value. 
     * @param value Value to set for the msdyn_workorderdetailsgenerationqueue_AsyncOperations property.
     */
    public set msdyn_workorderdetailsgenerationqueue_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_workorderdetailsgenerationqueue_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_workorderdetailsgenerationqueue_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_workorderdetailsgenerationqueue_BulkDeleteFailures() {
        return this._msdyn_workorderdetailsgenerationqueue_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_workorderdetailsgenerationqueue_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_workorderdetailsgenerationqueue_BulkDeleteFailures property.
     */
    public set msdyn_workorderdetailsgenerationqueue_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_workorderdetailsgenerationqueue_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_workorderdetailsgenerationqueue_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_workorderdetailsgenerationqueue_DuplicateBaseRecord() {
        return this._msdyn_workorderdetailsgenerationqueue_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_workorderdetailsgenerationqueue_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_workorderdetailsgenerationqueue_DuplicateBaseRecord property.
     */
    public set msdyn_workorderdetailsgenerationqueue_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_workorderdetailsgenerationqueue_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_workorderdetailsgenerationqueue_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_workorderdetailsgenerationqueue_DuplicateMatchingRecord() {
        return this._msdyn_workorderdetailsgenerationqueue_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_workorderdetailsgenerationqueue_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_workorderdetailsgenerationqueue_DuplicateMatchingRecord property.
     */
    public set msdyn_workorderdetailsgenerationqueue_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_workorderdetailsgenerationqueue_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_workorderdetailsgenerationqueue_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_workorderdetailsgenerationqueue_MailboxTrackingFolders() {
        return this._msdyn_workorderdetailsgenerationqueue_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_workorderdetailsgenerationqueue_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_workorderdetailsgenerationqueue_MailboxTrackingFolders property.
     */
    public set msdyn_workorderdetailsgenerationqueue_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_workorderdetailsgenerationqueue_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_workorderdetailsgenerationqueue_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_workorderdetailsgenerationqueue_PrincipalObjectAttributeAccesses() {
        return this._msdyn_workorderdetailsgenerationqueue_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_workorderdetailsgenerationqueue_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_workorderdetailsgenerationqueue_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_workorderdetailsgenerationqueue_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_workorderdetailsgenerationqueue_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_workorderdetailsgenerationqueue_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_workorderdetailsgenerationqueue_ProcessSession() {
        return this._msdyn_workorderdetailsgenerationqueue_ProcessSession;
    };
    /**
     * Sets the msdyn_workorderdetailsgenerationqueue_ProcessSession property value. 
     * @param value Value to set for the msdyn_workorderdetailsgenerationqueue_ProcessSession property.
     */
    public set msdyn_workorderdetailsgenerationqueue_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_workorderdetailsgenerationqueue_ProcessSession = value;
    };
    /**
     * Gets the msdyn_workorderdetailsgenerationqueue_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_workorderdetailsgenerationqueue_SyncErrors() {
        return this._msdyn_workorderdetailsgenerationqueue_SyncErrors;
    };
    /**
     * Sets the msdyn_workorderdetailsgenerationqueue_SyncErrors property value. 
     * @param value Value to set for the msdyn_workorderdetailsgenerationqueue_SyncErrors property.
     */
    public set msdyn_workorderdetailsgenerationqueue_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_workorderdetailsgenerationqueue_SyncErrors = value;
    };
    /**
     * Gets the msdyn_workorderdetailsgenerationqueueid property value. 
     * @returns a string
     */
    public get msdyn_workorderdetailsgenerationqueueid() {
        return this._msdyn_workorderdetailsgenerationqueueid;
    };
    /**
     * Sets the msdyn_workorderdetailsgenerationqueueid property value. 
     * @param value Value to set for the msdyn_workorderdetailsgenerationqueueid property.
     */
    public set msdyn_workorderdetailsgenerationqueueid(value: string | undefined) {
        this._msdyn_workorderdetailsgenerationqueueid = value;
    };
    /**
     * Gets the msdyn_workorderid property value. 
     * @returns a string
     */
    public get msdyn_workorderid() {
        return this._msdyn_workorderid;
    };
    /**
     * Sets the msdyn_workorderid property value. 
     * @param value Value to set for the msdyn_workorderid property.
     */
    public set msdyn_workorderid(value: string | undefined) {
        this._msdyn_workorderid = value;
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
        writer.writeStringValue("_msdyn_agreementbookingdate_value", this._msdyn_agreementbookingdate_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Msdyn_agreementbookingdate>("msdyn_agreementbookingdate", this.msdyn_agreementbookingdate);
        writer.writeStringValue("msdyn_booking", this.msdyn_booking);
        writer.writeStringValue("msdyn_exceptionmessage", this.msdyn_exceptionmessage);
        writer.writeStringValue("msdyn_exceptiontrace", this.msdyn_exceptiontrace);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeBooleanValue("msdyn_processed", this.msdyn_processed);
        writer.writeStringValue("msdyn_schdateownerid", this.msdyn_schdateownerid);
        writer.writeStringValue("msdyn_workorderdetails", this.msdyn_workorderdetails);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_workorderdetailsgenerationqueue_AsyncOperations", this.msdyn_workorderdetailsgenerationqueue_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_workorderdetailsgenerationqueue_BulkDeleteFailures", this.msdyn_workorderdetailsgenerationqueue_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_workorderdetailsgenerationqueue_DuplicateBaseRecord", this.msdyn_workorderdetailsgenerationqueue_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_workorderdetailsgenerationqueue_DuplicateMatchingRecord", this.msdyn_workorderdetailsgenerationqueue_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_workorderdetailsgenerationqueue_MailboxTrackingFolders", this.msdyn_workorderdetailsgenerationqueue_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_workorderdetailsgenerationqueue_PrincipalObjectAttributeAccesses", this.msdyn_workorderdetailsgenerationqueue_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_workorderdetailsgenerationqueue_ProcessSession", this.msdyn_workorderdetailsgenerationqueue_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_workorderdetailsgenerationqueue_SyncErrors", this.msdyn_workorderdetailsgenerationqueue_SyncErrors);
        writer.writeStringValue("msdyn_workorderdetailsgenerationqueueid", this.msdyn_workorderdetailsgenerationqueueid);
        writer.writeStringValue("msdyn_workorderid", this.msdyn_workorderid);
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
