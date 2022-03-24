import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createCharacteristicFromDiscriminatorValue} from './createCharacteristicFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_resourcerequirementFromDiscriminatorValue} from './createMsdyn_resourcerequirementFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createRatingvalueFromDiscriminatorValue} from './createRatingvalueFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bulkdeletefailure, Businessunit, Characteristic, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_resourcerequirement, Principal, Principalobjectattributeaccess, Processsession, Ratingvalue, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_characteristicreqforteammember extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_characteristic_value?: string | undefined;
    private __msdyn_ratingvalue_value?: string | undefined;
    private __msdyn_resourcerequirementid_value?: string | undefined;
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
    private _msdyn_characteristic?: Characteristic | undefined;
    private _msdyn_characteristicreqforteammember_Annotations?: Annotation[] | undefined;
    private _msdyn_characteristicreqforteammember_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_characteristicreqforteammember_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_characteristicreqforteammember_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_characteristicreqforteammember_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_characteristicreqforteammember_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_characteristicreqforteammember_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_characteristicreqforteammember_ProcessSession?: Processsession[] | undefined;
    private _msdyn_characteristicreqforteammember_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_characteristicreqforteammemberid?: string | undefined;
    private _msdyn_characteristictype?: number | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_ratingvalue?: Ratingvalue | undefined;
    private _msdyn_resourcerequirementid?: Msdyn_resourcerequirement | undefined;
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
     * Gets the _msdyn_characteristic_value property value. 
     * @returns a string
     */
    public get _msdyn_characteristic_value() {
        return this.__msdyn_characteristic_value;
    };
    /**
     * Sets the _msdyn_characteristic_value property value. 
     * @param value Value to set for the _msdyn_characteristic_value property.
     */
    public set _msdyn_characteristic_value(value: string | undefined) {
        this.__msdyn_characteristic_value = value;
    };
    /**
     * Gets the _msdyn_ratingvalue_value property value. 
     * @returns a string
     */
    public get _msdyn_ratingvalue_value() {
        return this.__msdyn_ratingvalue_value;
    };
    /**
     * Sets the _msdyn_ratingvalue_value property value. 
     * @param value Value to set for the _msdyn_ratingvalue_value property.
     */
    public set _msdyn_ratingvalue_value(value: string | undefined) {
        this.__msdyn_ratingvalue_value = value;
    };
    /**
     * Gets the _msdyn_resourcerequirementid_value property value. 
     * @returns a string
     */
    public get _msdyn_resourcerequirementid_value() {
        return this.__msdyn_resourcerequirementid_value;
    };
    /**
     * Sets the _msdyn_resourcerequirementid_value property value. 
     * @param value Value to set for the _msdyn_resourcerequirementid_value property.
     */
    public set _msdyn_resourcerequirementid_value(value: string | undefined) {
        this.__msdyn_resourcerequirementid_value = value;
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
     * Instantiates a new msdyn_characteristicreqforteammember and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_characteristic_value": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember)._msdyn_characteristic_value = n.getStringValue(); },
            "_msdyn_ratingvalue_value": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember)._msdyn_ratingvalue_value = n.getStringValue(); },
            "_msdyn_resourcerequirementid_value": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember)._msdyn_resourcerequirementid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_characteristic": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).msdyn_characteristic = n.getObjectValue<Characteristic>(createCharacteristicFromDiscriminatorValue); },
            "msdyn_characteristicreqforteammember_Annotations": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).msdyn_characteristicreqforteammember_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_characteristicreqforteammember_AsyncOperations": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).msdyn_characteristicreqforteammember_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_characteristicreqforteammember_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).msdyn_characteristicreqforteammember_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_characteristicreqforteammember_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).msdyn_characteristicreqforteammember_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_characteristicreqforteammember_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).msdyn_characteristicreqforteammember_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_characteristicreqforteammember_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).msdyn_characteristicreqforteammember_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_characteristicreqforteammember_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).msdyn_characteristicreqforteammember_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_characteristicreqforteammember_ProcessSession": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).msdyn_characteristicreqforteammember_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_characteristicreqforteammember_SyncErrors": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).msdyn_characteristicreqforteammember_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_characteristicreqforteammemberid": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).msdyn_characteristicreqforteammemberid = n.getStringValue(); },
            "msdyn_characteristictype": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).msdyn_characteristictype = n.getNumberValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).msdyn_name = n.getStringValue(); },
            "msdyn_ratingvalue": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).msdyn_ratingvalue = n.getObjectValue<Ratingvalue>(createRatingvalueFromDiscriminatorValue); },
            "msdyn_resourcerequirementid": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).msdyn_resourcerequirementid = n.getObjectValue<Msdyn_resourcerequirement>(createMsdyn_resourcerequirementFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_characteristicreqforteammember).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_characteristic property value. 
     * @returns a characteristic
     */
    public get msdyn_characteristic() {
        return this._msdyn_characteristic;
    };
    /**
     * Sets the msdyn_characteristic property value. 
     * @param value Value to set for the msdyn_characteristic property.
     */
    public set msdyn_characteristic(value: Characteristic | undefined) {
        this._msdyn_characteristic = value;
    };
    /**
     * Gets the msdyn_characteristicreqforteammember_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_characteristicreqforteammember_Annotations() {
        return this._msdyn_characteristicreqforteammember_Annotations;
    };
    /**
     * Sets the msdyn_characteristicreqforteammember_Annotations property value. 
     * @param value Value to set for the msdyn_characteristicreqforteammember_Annotations property.
     */
    public set msdyn_characteristicreqforteammember_Annotations(value: Annotation[] | undefined) {
        this._msdyn_characteristicreqforteammember_Annotations = value;
    };
    /**
     * Gets the msdyn_characteristicreqforteammember_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_characteristicreqforteammember_AsyncOperations() {
        return this._msdyn_characteristicreqforteammember_AsyncOperations;
    };
    /**
     * Sets the msdyn_characteristicreqforteammember_AsyncOperations property value. 
     * @param value Value to set for the msdyn_characteristicreqforteammember_AsyncOperations property.
     */
    public set msdyn_characteristicreqforteammember_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_characteristicreqforteammember_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_characteristicreqforteammember_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_characteristicreqforteammember_BulkDeleteFailures() {
        return this._msdyn_characteristicreqforteammember_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_characteristicreqforteammember_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_characteristicreqforteammember_BulkDeleteFailures property.
     */
    public set msdyn_characteristicreqforteammember_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_characteristicreqforteammember_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_characteristicreqforteammember_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_characteristicreqforteammember_DuplicateBaseRecord() {
        return this._msdyn_characteristicreqforteammember_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_characteristicreqforteammember_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_characteristicreqforteammember_DuplicateBaseRecord property.
     */
    public set msdyn_characteristicreqforteammember_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_characteristicreqforteammember_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_characteristicreqforteammember_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_characteristicreqforteammember_DuplicateMatchingRecord() {
        return this._msdyn_characteristicreqforteammember_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_characteristicreqforteammember_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_characteristicreqforteammember_DuplicateMatchingRecord property.
     */
    public set msdyn_characteristicreqforteammember_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_characteristicreqforteammember_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_characteristicreqforteammember_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_characteristicreqforteammember_MailboxTrackingFolders() {
        return this._msdyn_characteristicreqforteammember_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_characteristicreqforteammember_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_characteristicreqforteammember_MailboxTrackingFolders property.
     */
    public set msdyn_characteristicreqforteammember_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_characteristicreqforteammember_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_characteristicreqforteammember_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_characteristicreqforteammember_PrincipalObjectAttributeAccesses() {
        return this._msdyn_characteristicreqforteammember_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_characteristicreqforteammember_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_characteristicreqforteammember_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_characteristicreqforteammember_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_characteristicreqforteammember_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_characteristicreqforteammember_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_characteristicreqforteammember_ProcessSession() {
        return this._msdyn_characteristicreqforteammember_ProcessSession;
    };
    /**
     * Sets the msdyn_characteristicreqforteammember_ProcessSession property value. 
     * @param value Value to set for the msdyn_characteristicreqforteammember_ProcessSession property.
     */
    public set msdyn_characteristicreqforteammember_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_characteristicreqforteammember_ProcessSession = value;
    };
    /**
     * Gets the msdyn_characteristicreqforteammember_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_characteristicreqforteammember_SyncErrors() {
        return this._msdyn_characteristicreqforteammember_SyncErrors;
    };
    /**
     * Sets the msdyn_characteristicreqforteammember_SyncErrors property value. 
     * @param value Value to set for the msdyn_characteristicreqforteammember_SyncErrors property.
     */
    public set msdyn_characteristicreqforteammember_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_characteristicreqforteammember_SyncErrors = value;
    };
    /**
     * Gets the msdyn_characteristicreqforteammemberid property value. 
     * @returns a string
     */
    public get msdyn_characteristicreqforteammemberid() {
        return this._msdyn_characteristicreqforteammemberid;
    };
    /**
     * Sets the msdyn_characteristicreqforteammemberid property value. 
     * @param value Value to set for the msdyn_characteristicreqforteammemberid property.
     */
    public set msdyn_characteristicreqforteammemberid(value: string | undefined) {
        this._msdyn_characteristicreqforteammemberid = value;
    };
    /**
     * Gets the msdyn_characteristictype property value. 
     * @returns a integer
     */
    public get msdyn_characteristictype() {
        return this._msdyn_characteristictype;
    };
    /**
     * Sets the msdyn_characteristictype property value. 
     * @param value Value to set for the msdyn_characteristictype property.
     */
    public set msdyn_characteristictype(value: number | undefined) {
        this._msdyn_characteristictype = value;
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
     * Gets the msdyn_ratingvalue property value. 
     * @returns a ratingvalue
     */
    public get msdyn_ratingvalue() {
        return this._msdyn_ratingvalue;
    };
    /**
     * Sets the msdyn_ratingvalue property value. 
     * @param value Value to set for the msdyn_ratingvalue property.
     */
    public set msdyn_ratingvalue(value: Ratingvalue | undefined) {
        this._msdyn_ratingvalue = value;
    };
    /**
     * Gets the msdyn_resourcerequirementid property value. 
     * @returns a msdyn_resourcerequirement
     */
    public get msdyn_resourcerequirementid() {
        return this._msdyn_resourcerequirementid;
    };
    /**
     * Sets the msdyn_resourcerequirementid property value. 
     * @param value Value to set for the msdyn_resourcerequirementid property.
     */
    public set msdyn_resourcerequirementid(value: Msdyn_resourcerequirement | undefined) {
        this._msdyn_resourcerequirementid = value;
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
        writer.writeStringValue("_msdyn_characteristic_value", this._msdyn_characteristic_value);
        writer.writeStringValue("_msdyn_ratingvalue_value", this._msdyn_ratingvalue_value);
        writer.writeStringValue("_msdyn_resourcerequirementid_value", this._msdyn_resourcerequirementid_value);
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
        writer.writeObjectValue<Characteristic>("msdyn_characteristic", this.msdyn_characteristic);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_characteristicreqforteammember_Annotations", this.msdyn_characteristicreqforteammember_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_characteristicreqforteammember_AsyncOperations", this.msdyn_characteristicreqforteammember_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_characteristicreqforteammember_BulkDeleteFailures", this.msdyn_characteristicreqforteammember_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_characteristicreqforteammember_DuplicateBaseRecord", this.msdyn_characteristicreqforteammember_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_characteristicreqforteammember_DuplicateMatchingRecord", this.msdyn_characteristicreqforteammember_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_characteristicreqforteammember_MailboxTrackingFolders", this.msdyn_characteristicreqforteammember_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_characteristicreqforteammember_PrincipalObjectAttributeAccesses", this.msdyn_characteristicreqforteammember_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_characteristicreqforteammember_ProcessSession", this.msdyn_characteristicreqforteammember_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_characteristicreqforteammember_SyncErrors", this.msdyn_characteristicreqforteammember_SyncErrors);
        writer.writeStringValue("msdyn_characteristicreqforteammemberid", this.msdyn_characteristicreqforteammemberid);
        writer.writeNumberValue("msdyn_characteristictype", this.msdyn_characteristictype);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Ratingvalue>("msdyn_ratingvalue", this.msdyn_ratingvalue);
        writer.writeObjectValue<Msdyn_resourcerequirement>("msdyn_resourcerequirementid", this.msdyn_resourcerequirementid);
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
