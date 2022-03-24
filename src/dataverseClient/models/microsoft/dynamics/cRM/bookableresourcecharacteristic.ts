import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcecharacteristicFromDiscriminatorValue} from './createBookableresourcecharacteristicFromDiscriminatorValue';
import {createBookableresourceFromDiscriminatorValue} from './createBookableresourceFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createCharacteristicFromDiscriminatorValue} from './createCharacteristicFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createRatingvalueFromDiscriminatorValue} from './createRatingvalueFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bookableresource, Bulkdeletefailure, Businessunit, Characteristic, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_approval, Principal, Principalobjectattributeaccess, Processsession, Ratingvalue, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Bookableresourcecharacteristic extends Crmbaseentity implements Parsable {
    private __characteristic_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_supportingrecord_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __ratingvalue_value?: string | undefined;
    private __resource_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _bookableresourcecharacteristic_Annotations?: Annotation[] | undefined;
    private _bookableresourcecharacteristic_AsyncOperations?: Asyncoperation[] | undefined;
    private _bookableresourcecharacteristic_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _bookableresourcecharacteristic_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _bookableresourcecharacteristic_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _bookableresourcecharacteristic_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _bookableresourcecharacteristic_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _bookableresourcecharacteristic_ProcessSession?: Processsession[] | undefined;
    private _bookableResourceCharacteristic_SyncErrors?: Syncerror[] | undefined;
    private _bookableresourcecharacteristicid?: string | undefined;
    private _characteristic?: Characteristic | undefined;
    private _createdbyname?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfbyname?: Systemuser | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedbyname?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfbyname?: Systemuser | undefined;
    private _msdyn_approvalstatus?: number | undefined;
    private _msdyn_bookableresourcecharacteristic_bookableresourcecharacteristic_supportingrecord?: Bookableresourcecharacteristic[] | undefined;
    private _msdyn_bookableresourcecharacteristic_msdyn_approval_Characteristic?: Msdyn_approval[] | undefined;
    private _msdyn_supportingrecord?: Bookableresourcecharacteristic | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _processid?: string | undefined;
    private _ratingValue?: Ratingvalue | undefined;
    private _resource?: Bookableresource | undefined;
    private _stageid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _traversedpath?: string | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _characteristic_value property value. 
     * @returns a string
     */
    public get _characteristic_value() {
        return this.__characteristic_value;
    };
    /**
     * Sets the _characteristic_value property value. 
     * @param value Value to set for the _characteristic_value property.
     */
    public set _characteristic_value(value: string | undefined) {
        this.__characteristic_value = value;
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
     * Gets the _msdyn_supportingrecord_value property value. 
     * @returns a string
     */
    public get _msdyn_supportingrecord_value() {
        return this.__msdyn_supportingrecord_value;
    };
    /**
     * Sets the _msdyn_supportingrecord_value property value. 
     * @param value Value to set for the _msdyn_supportingrecord_value property.
     */
    public set _msdyn_supportingrecord_value(value: string | undefined) {
        this.__msdyn_supportingrecord_value = value;
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
     * Gets the _ratingvalue_value property value. 
     * @returns a string
     */
    public get _ratingvalue_value() {
        return this.__ratingvalue_value;
    };
    /**
     * Sets the _ratingvalue_value property value. 
     * @param value Value to set for the _ratingvalue_value property.
     */
    public set _ratingvalue_value(value: string | undefined) {
        this.__ratingvalue_value = value;
    };
    /**
     * Gets the _resource_value property value. 
     * @returns a string
     */
    public get _resource_value() {
        return this.__resource_value;
    };
    /**
     * Sets the _resource_value property value. 
     * @param value Value to set for the _resource_value property.
     */
    public set _resource_value(value: string | undefined) {
        this.__resource_value = value;
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
     * Gets the bookableresourcecharacteristic_Annotations property value. 
     * @returns a annotation
     */
    public get bookableresourcecharacteristic_Annotations() {
        return this._bookableresourcecharacteristic_Annotations;
    };
    /**
     * Sets the bookableresourcecharacteristic_Annotations property value. 
     * @param value Value to set for the bookableresourcecharacteristic_Annotations property.
     */
    public set bookableresourcecharacteristic_Annotations(value: Annotation[] | undefined) {
        this._bookableresourcecharacteristic_Annotations = value;
    };
    /**
     * Gets the bookableresourcecharacteristic_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get bookableresourcecharacteristic_AsyncOperations() {
        return this._bookableresourcecharacteristic_AsyncOperations;
    };
    /**
     * Sets the bookableresourcecharacteristic_AsyncOperations property value. 
     * @param value Value to set for the bookableresourcecharacteristic_AsyncOperations property.
     */
    public set bookableresourcecharacteristic_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._bookableresourcecharacteristic_AsyncOperations = value;
    };
    /**
     * Gets the bookableresourcecharacteristic_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get bookableresourcecharacteristic_BulkDeleteFailures() {
        return this._bookableresourcecharacteristic_BulkDeleteFailures;
    };
    /**
     * Sets the bookableresourcecharacteristic_BulkDeleteFailures property value. 
     * @param value Value to set for the bookableresourcecharacteristic_BulkDeleteFailures property.
     */
    public set bookableresourcecharacteristic_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._bookableresourcecharacteristic_BulkDeleteFailures = value;
    };
    /**
     * Gets the bookableresourcecharacteristic_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get bookableresourcecharacteristic_DuplicateBaseRecord() {
        return this._bookableresourcecharacteristic_DuplicateBaseRecord;
    };
    /**
     * Sets the bookableresourcecharacteristic_DuplicateBaseRecord property value. 
     * @param value Value to set for the bookableresourcecharacteristic_DuplicateBaseRecord property.
     */
    public set bookableresourcecharacteristic_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._bookableresourcecharacteristic_DuplicateBaseRecord = value;
    };
    /**
     * Gets the bookableresourcecharacteristic_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get bookableresourcecharacteristic_DuplicateMatchingRecord() {
        return this._bookableresourcecharacteristic_DuplicateMatchingRecord;
    };
    /**
     * Sets the bookableresourcecharacteristic_DuplicateMatchingRecord property value. 
     * @param value Value to set for the bookableresourcecharacteristic_DuplicateMatchingRecord property.
     */
    public set bookableresourcecharacteristic_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._bookableresourcecharacteristic_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the bookableresourcecharacteristic_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get bookableresourcecharacteristic_MailboxTrackingFolders() {
        return this._bookableresourcecharacteristic_MailboxTrackingFolders;
    };
    /**
     * Sets the bookableresourcecharacteristic_MailboxTrackingFolders property value. 
     * @param value Value to set for the bookableresourcecharacteristic_MailboxTrackingFolders property.
     */
    public set bookableresourcecharacteristic_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._bookableresourcecharacteristic_MailboxTrackingFolders = value;
    };
    /**
     * Gets the bookableresourcecharacteristic_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get bookableresourcecharacteristic_PrincipalObjectAttributeAccesses() {
        return this._bookableresourcecharacteristic_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the bookableresourcecharacteristic_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the bookableresourcecharacteristic_PrincipalObjectAttributeAccesses property.
     */
    public set bookableresourcecharacteristic_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._bookableresourcecharacteristic_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the bookableresourcecharacteristic_ProcessSession property value. 
     * @returns a processsession
     */
    public get bookableresourcecharacteristic_ProcessSession() {
        return this._bookableresourcecharacteristic_ProcessSession;
    };
    /**
     * Sets the bookableresourcecharacteristic_ProcessSession property value. 
     * @param value Value to set for the bookableresourcecharacteristic_ProcessSession property.
     */
    public set bookableresourcecharacteristic_ProcessSession(value: Processsession[] | undefined) {
        this._bookableresourcecharacteristic_ProcessSession = value;
    };
    /**
     * Gets the bookableResourceCharacteristic_SyncErrors property value. 
     * @returns a syncerror
     */
    public get bookableResourceCharacteristic_SyncErrors() {
        return this._bookableResourceCharacteristic_SyncErrors;
    };
    /**
     * Sets the bookableResourceCharacteristic_SyncErrors property value. 
     * @param value Value to set for the BookableResourceCharacteristic_SyncErrors property.
     */
    public set bookableResourceCharacteristic_SyncErrors(value: Syncerror[] | undefined) {
        this._bookableResourceCharacteristic_SyncErrors = value;
    };
    /**
     * Gets the bookableresourcecharacteristicid property value. 
     * @returns a string
     */
    public get bookableresourcecharacteristicid() {
        return this._bookableresourcecharacteristicid;
    };
    /**
     * Sets the bookableresourcecharacteristicid property value. 
     * @param value Value to set for the bookableresourcecharacteristicid property.
     */
    public set bookableresourcecharacteristicid(value: string | undefined) {
        this._bookableresourcecharacteristicid = value;
    };
    /**
     * Gets the characteristic property value. 
     * @returns a characteristic
     */
    public get characteristic() {
        return this._characteristic;
    };
    /**
     * Sets the characteristic property value. 
     * @param value Value to set for the Characteristic property.
     */
    public set characteristic(value: Characteristic | undefined) {
        this._characteristic = value;
    };
    /**
     * Instantiates a new bookableresourcecharacteristic and sets the default values.
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
            "_characteristic_value": (o, n) => { (o as unknown as Bookableresourcecharacteristic)._characteristic_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Bookableresourcecharacteristic)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Bookableresourcecharacteristic)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Bookableresourcecharacteristic)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Bookableresourcecharacteristic)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_supportingrecord_value": (o, n) => { (o as unknown as Bookableresourcecharacteristic)._msdyn_supportingrecord_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Bookableresourcecharacteristic)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Bookableresourcecharacteristic)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Bookableresourcecharacteristic)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Bookableresourcecharacteristic)._owninguser_value = n.getStringValue(); },
            "_ratingvalue_value": (o, n) => { (o as unknown as Bookableresourcecharacteristic)._ratingvalue_value = n.getStringValue(); },
            "_resource_value": (o, n) => { (o as unknown as Bookableresourcecharacteristic)._resource_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Bookableresourcecharacteristic)._transactioncurrencyid_value = n.getStringValue(); },
            "bookableresourcecharacteristic_Annotations": (o, n) => { (o as unknown as Bookableresourcecharacteristic).bookableresourcecharacteristic_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "bookableresourcecharacteristic_AsyncOperations": (o, n) => { (o as unknown as Bookableresourcecharacteristic).bookableresourcecharacteristic_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "bookableresourcecharacteristic_BulkDeleteFailures": (o, n) => { (o as unknown as Bookableresourcecharacteristic).bookableresourcecharacteristic_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "bookableresourcecharacteristic_DuplicateBaseRecord": (o, n) => { (o as unknown as Bookableresourcecharacteristic).bookableresourcecharacteristic_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "bookableresourcecharacteristic_DuplicateMatchingRecord": (o, n) => { (o as unknown as Bookableresourcecharacteristic).bookableresourcecharacteristic_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "bookableresourcecharacteristic_MailboxTrackingFolders": (o, n) => { (o as unknown as Bookableresourcecharacteristic).bookableresourcecharacteristic_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "bookableresourcecharacteristic_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Bookableresourcecharacteristic).bookableresourcecharacteristic_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "bookableresourcecharacteristic_ProcessSession": (o, n) => { (o as unknown as Bookableresourcecharacteristic).bookableresourcecharacteristic_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "bookableResourceCharacteristic_SyncErrors": (o, n) => { (o as unknown as Bookableresourcecharacteristic).bookableResourceCharacteristic_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "bookableresourcecharacteristicid": (o, n) => { (o as unknown as Bookableresourcecharacteristic).bookableresourcecharacteristicid = n.getStringValue(); },
            "characteristic": (o, n) => { (o as unknown as Bookableresourcecharacteristic).characteristic = n.getObjectValue<Characteristic>(createCharacteristicFromDiscriminatorValue); },
            "createdbyname": (o, n) => { (o as unknown as Bookableresourcecharacteristic).createdbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Bookableresourcecharacteristic).createdon = n.getDateValue(); },
            "createdonbehalfbyname": (o, n) => { (o as unknown as Bookableresourcecharacteristic).createdonbehalfbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Bookableresourcecharacteristic).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Bookableresourcecharacteristic).importsequencenumber = n.getNumberValue(); },
            "modifiedbyname": (o, n) => { (o as unknown as Bookableresourcecharacteristic).modifiedbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Bookableresourcecharacteristic).modifiedon = n.getDateValue(); },
            "modifiedonbehalfbyname": (o, n) => { (o as unknown as Bookableresourcecharacteristic).modifiedonbehalfbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_approvalstatus": (o, n) => { (o as unknown as Bookableresourcecharacteristic).msdyn_approvalstatus = n.getNumberValue(); },
            "msdyn_bookableresourcecharacteristic_bookableresourcecharacteristic_supportingrecord": (o, n) => { (o as unknown as Bookableresourcecharacteristic).msdyn_bookableresourcecharacteristic_bookableresourcecharacteristic_supportingrecord = n.getCollectionOfObjectValues<Bookableresourcecharacteristic>(createBookableresourcecharacteristicFromDiscriminatorValue); },
            "msdyn_bookableresourcecharacteristic_msdyn_approval_Characteristic": (o, n) => { (o as unknown as Bookableresourcecharacteristic).msdyn_bookableresourcecharacteristic_msdyn_approval_Characteristic = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_supportingrecord": (o, n) => { (o as unknown as Bookableresourcecharacteristic).msdyn_supportingrecord = n.getObjectValue<Bookableresourcecharacteristic>(createBookableresourcecharacteristicFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Bookableresourcecharacteristic).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Bookableresourcecharacteristic).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Bookableresourcecharacteristic).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Bookableresourcecharacteristic).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Bookableresourcecharacteristic).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Bookableresourcecharacteristic).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "processid": (o, n) => { (o as unknown as Bookableresourcecharacteristic).processid = n.getStringValue(); },
            "ratingValue": (o, n) => { (o as unknown as Bookableresourcecharacteristic).ratingValue = n.getObjectValue<Ratingvalue>(createRatingvalueFromDiscriminatorValue); },
            "resource": (o, n) => { (o as unknown as Bookableresourcecharacteristic).resource = n.getObjectValue<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "stageid": (o, n) => { (o as unknown as Bookableresourcecharacteristic).stageid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Bookableresourcecharacteristic).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Bookableresourcecharacteristic).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Bookableresourcecharacteristic).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Bookableresourcecharacteristic).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "traversedpath": (o, n) => { (o as unknown as Bookableresourcecharacteristic).traversedpath = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Bookableresourcecharacteristic).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Bookableresourcecharacteristic).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_approvalstatus property value. 
     * @returns a integer
     */
    public get msdyn_approvalstatus() {
        return this._msdyn_approvalstatus;
    };
    /**
     * Sets the msdyn_approvalstatus property value. 
     * @param value Value to set for the msdyn_approvalstatus property.
     */
    public set msdyn_approvalstatus(value: number | undefined) {
        this._msdyn_approvalstatus = value;
    };
    /**
     * Gets the msdyn_bookableresourcecharacteristic_bookableresourcecharacteristic_supportingrecord property value. 
     * @returns a bookableresourcecharacteristic
     */
    public get msdyn_bookableresourcecharacteristic_bookableresourcecharacteristic_supportingrecord() {
        return this._msdyn_bookableresourcecharacteristic_bookableresourcecharacteristic_supportingrecord;
    };
    /**
     * Sets the msdyn_bookableresourcecharacteristic_bookableresourcecharacteristic_supportingrecord property value. 
     * @param value Value to set for the msdyn_bookableresourcecharacteristic_bookableresourcecharacteristic_supportingrecord property.
     */
    public set msdyn_bookableresourcecharacteristic_bookableresourcecharacteristic_supportingrecord(value: Bookableresourcecharacteristic[] | undefined) {
        this._msdyn_bookableresourcecharacteristic_bookableresourcecharacteristic_supportingrecord = value;
    };
    /**
     * Gets the msdyn_bookableresourcecharacteristic_msdyn_approval_Characteristic property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_bookableresourcecharacteristic_msdyn_approval_Characteristic() {
        return this._msdyn_bookableresourcecharacteristic_msdyn_approval_Characteristic;
    };
    /**
     * Sets the msdyn_bookableresourcecharacteristic_msdyn_approval_Characteristic property value. 
     * @param value Value to set for the msdyn_bookableresourcecharacteristic_msdyn_approval_Characteristic property.
     */
    public set msdyn_bookableresourcecharacteristic_msdyn_approval_Characteristic(value: Msdyn_approval[] | undefined) {
        this._msdyn_bookableresourcecharacteristic_msdyn_approval_Characteristic = value;
    };
    /**
     * Gets the msdyn_supportingrecord property value. 
     * @returns a bookableresourcecharacteristic
     */
    public get msdyn_supportingrecord() {
        return this._msdyn_supportingrecord;
    };
    /**
     * Sets the msdyn_supportingrecord property value. 
     * @param value Value to set for the msdyn_supportingrecord property.
     */
    public set msdyn_supportingrecord(value: Bookableresourcecharacteristic | undefined) {
        this._msdyn_supportingrecord = value;
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
     * Gets the processid property value. 
     * @returns a string
     */
    public get processid() {
        return this._processid;
    };
    /**
     * Sets the processid property value. 
     * @param value Value to set for the processid property.
     */
    public set processid(value: string | undefined) {
        this._processid = value;
    };
    /**
     * Gets the ratingValue property value. 
     * @returns a ratingvalue
     */
    public get ratingValue() {
        return this._ratingValue;
    };
    /**
     * Sets the ratingValue property value. 
     * @param value Value to set for the RatingValue property.
     */
    public set ratingValue(value: Ratingvalue | undefined) {
        this._ratingValue = value;
    };
    /**
     * Gets the resource property value. 
     * @returns a bookableresource
     */
    public get resource() {
        return this._resource;
    };
    /**
     * Sets the resource property value. 
     * @param value Value to set for the Resource property.
     */
    public set resource(value: Bookableresource | undefined) {
        this._resource = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_characteristic_value", this._characteristic_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyn_supportingrecord_value", this._msdyn_supportingrecord_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_ratingvalue_value", this._ratingvalue_value);
        writer.writeStringValue("_resource_value", this._resource_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeCollectionOfObjectValues<Annotation>("bookableresourcecharacteristic_Annotations", this.bookableresourcecharacteristic_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("bookableresourcecharacteristic_AsyncOperations", this.bookableresourcecharacteristic_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("bookableresourcecharacteristic_BulkDeleteFailures", this.bookableresourcecharacteristic_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("bookableresourcecharacteristic_DuplicateBaseRecord", this.bookableresourcecharacteristic_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("bookableresourcecharacteristic_DuplicateMatchingRecord", this.bookableresourcecharacteristic_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("bookableresourcecharacteristic_MailboxTrackingFolders", this.bookableresourcecharacteristic_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("bookableresourcecharacteristic_PrincipalObjectAttributeAccesses", this.bookableresourcecharacteristic_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("bookableresourcecharacteristic_ProcessSession", this.bookableresourcecharacteristic_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("bookableResourceCharacteristic_SyncErrors", this.bookableResourceCharacteristic_SyncErrors);
        writer.writeStringValue("bookableresourcecharacteristicid", this.bookableresourcecharacteristicid);
        writer.writeObjectValue<Characteristic>("characteristic", this.characteristic);
        writer.writeObjectValue<Systemuser>("createdbyname", this.createdbyname);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfbyname", this.createdonbehalfbyname);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedbyname", this.modifiedbyname);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfbyname", this.modifiedonbehalfbyname);
        writer.writeNumberValue("msdyn_approvalstatus", this.msdyn_approvalstatus);
        writer.writeCollectionOfObjectValues<Bookableresourcecharacteristic>("msdyn_bookableresourcecharacteristic_bookableresourcecharacteristic_supportingrecord", this.msdyn_bookableresourcecharacteristic_bookableresourcecharacteristic_supportingrecord);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_bookableresourcecharacteristic_msdyn_approval_Characteristic", this.msdyn_bookableresourcecharacteristic_msdyn_approval_Characteristic);
        writer.writeObjectValue<Bookableresourcecharacteristic>("msdyn_supportingrecord", this.msdyn_supportingrecord);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("processid", this.processid);
        writer.writeObjectValue<Ratingvalue>("ratingValue", this.ratingValue);
        writer.writeObjectValue<Bookableresource>("resource", this.resource);
        writer.writeStringValue("stageid", this.stageid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeStringValue("traversedpath", this.traversedpath);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the stageid property value. 
     * @returns a string
     */
    public get stageid() {
        return this._stageid;
    };
    /**
     * Sets the stageid property value. 
     * @param value Value to set for the stageid property.
     */
    public set stageid(value: string | undefined) {
        this._stageid = value;
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
     * Gets the traversedpath property value. 
     * @returns a string
     */
    public get traversedpath() {
        return this._traversedpath;
    };
    /**
     * Sets the traversedpath property value. 
     * @param value Value to set for the traversedpath property.
     */
    public set traversedpath(value: string | undefined) {
        this._traversedpath = value;
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
