import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcecategoryFromDiscriminatorValue} from './createBookableresourcecategoryFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createCharacteristicFromDiscriminatorValue} from './createCharacteristicFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createRatingvalueFromDiscriminatorValue} from './createRatingvalueFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bookableresourcecategory, Bulkdeletefailure, Businessunit, Characteristic, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Ratingvalue, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_rolecompetencyrequirement extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_characteristic_value?: string | undefined;
    private __msdyn_ratingvalue_value?: string | undefined;
    private __msdyn_resourcecategory_value?: string | undefined;
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
    private _msdyn_characteristictype?: number | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_ratingvalue?: Ratingvalue | undefined;
    private _msdyn_resourcecategory?: Bookableresourcecategory | undefined;
    private _msdyn_rolecompetencyrequirement_Annotations?: Annotation[] | undefined;
    private _msdyn_rolecompetencyrequirement_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_rolecompetencyrequirement_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_rolecompetencyrequirement_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_rolecompetencyrequirement_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_rolecompetencyrequirement_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_rolecompetencyrequirement_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_rolecompetencyrequirement_ProcessSession?: Processsession[] | undefined;
    private _msdyn_rolecompetencyrequirement_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_rolecompetencyrequirementid?: string | undefined;
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
     * Gets the _msdyn_resourcecategory_value property value. 
     * @returns a string
     */
    public get _msdyn_resourcecategory_value() {
        return this.__msdyn_resourcecategory_value;
    };
    /**
     * Sets the _msdyn_resourcecategory_value property value. 
     * @param value Value to set for the _msdyn_resourcecategory_value property.
     */
    public set _msdyn_resourcecategory_value(value: string | undefined) {
        this.__msdyn_resourcecategory_value = value;
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
     * Instantiates a new msdyn_rolecompetencyrequirement and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_characteristic_value": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement)._msdyn_characteristic_value = n.getStringValue(); },
            "_msdyn_ratingvalue_value": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement)._msdyn_ratingvalue_value = n.getStringValue(); },
            "_msdyn_resourcecategory_value": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement)._msdyn_resourcecategory_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_characteristic": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).msdyn_characteristic = n.getObjectValue<Characteristic>(createCharacteristicFromDiscriminatorValue); },
            "msdyn_characteristictype": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).msdyn_characteristictype = n.getNumberValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).msdyn_name = n.getStringValue(); },
            "msdyn_ratingvalue": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).msdyn_ratingvalue = n.getObjectValue<Ratingvalue>(createRatingvalueFromDiscriminatorValue); },
            "msdyn_resourcecategory": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).msdyn_resourcecategory = n.getObjectValue<Bookableresourcecategory>(createBookableresourcecategoryFromDiscriminatorValue); },
            "msdyn_rolecompetencyrequirement_Annotations": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).msdyn_rolecompetencyrequirement_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_rolecompetencyrequirement_AsyncOperations": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).msdyn_rolecompetencyrequirement_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_rolecompetencyrequirement_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).msdyn_rolecompetencyrequirement_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_rolecompetencyrequirement_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).msdyn_rolecompetencyrequirement_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_rolecompetencyrequirement_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).msdyn_rolecompetencyrequirement_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_rolecompetencyrequirement_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).msdyn_rolecompetencyrequirement_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_rolecompetencyrequirement_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).msdyn_rolecompetencyrequirement_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_rolecompetencyrequirement_ProcessSession": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).msdyn_rolecompetencyrequirement_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_rolecompetencyrequirement_SyncErrors": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).msdyn_rolecompetencyrequirement_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_rolecompetencyrequirementid": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).msdyn_rolecompetencyrequirementid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_rolecompetencyrequirement).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_resourcecategory property value. 
     * @returns a bookableresourcecategory
     */
    public get msdyn_resourcecategory() {
        return this._msdyn_resourcecategory;
    };
    /**
     * Sets the msdyn_resourcecategory property value. 
     * @param value Value to set for the msdyn_resourcecategory property.
     */
    public set msdyn_resourcecategory(value: Bookableresourcecategory | undefined) {
        this._msdyn_resourcecategory = value;
    };
    /**
     * Gets the msdyn_rolecompetencyrequirement_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_rolecompetencyrequirement_Annotations() {
        return this._msdyn_rolecompetencyrequirement_Annotations;
    };
    /**
     * Sets the msdyn_rolecompetencyrequirement_Annotations property value. 
     * @param value Value to set for the msdyn_rolecompetencyrequirement_Annotations property.
     */
    public set msdyn_rolecompetencyrequirement_Annotations(value: Annotation[] | undefined) {
        this._msdyn_rolecompetencyrequirement_Annotations = value;
    };
    /**
     * Gets the msdyn_rolecompetencyrequirement_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_rolecompetencyrequirement_AsyncOperations() {
        return this._msdyn_rolecompetencyrequirement_AsyncOperations;
    };
    /**
     * Sets the msdyn_rolecompetencyrequirement_AsyncOperations property value. 
     * @param value Value to set for the msdyn_rolecompetencyrequirement_AsyncOperations property.
     */
    public set msdyn_rolecompetencyrequirement_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_rolecompetencyrequirement_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_rolecompetencyrequirement_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_rolecompetencyrequirement_BulkDeleteFailures() {
        return this._msdyn_rolecompetencyrequirement_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_rolecompetencyrequirement_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_rolecompetencyrequirement_BulkDeleteFailures property.
     */
    public set msdyn_rolecompetencyrequirement_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_rolecompetencyrequirement_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_rolecompetencyrequirement_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_rolecompetencyrequirement_DuplicateBaseRecord() {
        return this._msdyn_rolecompetencyrequirement_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_rolecompetencyrequirement_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_rolecompetencyrequirement_DuplicateBaseRecord property.
     */
    public set msdyn_rolecompetencyrequirement_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_rolecompetencyrequirement_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_rolecompetencyrequirement_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_rolecompetencyrequirement_DuplicateMatchingRecord() {
        return this._msdyn_rolecompetencyrequirement_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_rolecompetencyrequirement_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_rolecompetencyrequirement_DuplicateMatchingRecord property.
     */
    public set msdyn_rolecompetencyrequirement_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_rolecompetencyrequirement_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_rolecompetencyrequirement_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_rolecompetencyrequirement_MailboxTrackingFolders() {
        return this._msdyn_rolecompetencyrequirement_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_rolecompetencyrequirement_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_rolecompetencyrequirement_MailboxTrackingFolders property.
     */
    public set msdyn_rolecompetencyrequirement_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_rolecompetencyrequirement_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_rolecompetencyrequirement_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_rolecompetencyrequirement_PrincipalObjectAttributeAccesses() {
        return this._msdyn_rolecompetencyrequirement_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_rolecompetencyrequirement_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_rolecompetencyrequirement_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_rolecompetencyrequirement_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_rolecompetencyrequirement_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_rolecompetencyrequirement_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_rolecompetencyrequirement_ProcessSession() {
        return this._msdyn_rolecompetencyrequirement_ProcessSession;
    };
    /**
     * Sets the msdyn_rolecompetencyrequirement_ProcessSession property value. 
     * @param value Value to set for the msdyn_rolecompetencyrequirement_ProcessSession property.
     */
    public set msdyn_rolecompetencyrequirement_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_rolecompetencyrequirement_ProcessSession = value;
    };
    /**
     * Gets the msdyn_rolecompetencyrequirement_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_rolecompetencyrequirement_SyncErrors() {
        return this._msdyn_rolecompetencyrequirement_SyncErrors;
    };
    /**
     * Sets the msdyn_rolecompetencyrequirement_SyncErrors property value. 
     * @param value Value to set for the msdyn_rolecompetencyrequirement_SyncErrors property.
     */
    public set msdyn_rolecompetencyrequirement_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_rolecompetencyrequirement_SyncErrors = value;
    };
    /**
     * Gets the msdyn_rolecompetencyrequirementid property value. 
     * @returns a string
     */
    public get msdyn_rolecompetencyrequirementid() {
        return this._msdyn_rolecompetencyrequirementid;
    };
    /**
     * Sets the msdyn_rolecompetencyrequirementid property value. 
     * @param value Value to set for the msdyn_rolecompetencyrequirementid property.
     */
    public set msdyn_rolecompetencyrequirementid(value: string | undefined) {
        this._msdyn_rolecompetencyrequirementid = value;
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
        writer.writeStringValue("_msdyn_resourcecategory_value", this._msdyn_resourcecategory_value);
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
        writer.writeNumberValue("msdyn_characteristictype", this.msdyn_characteristictype);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Ratingvalue>("msdyn_ratingvalue", this.msdyn_ratingvalue);
        writer.writeObjectValue<Bookableresourcecategory>("msdyn_resourcecategory", this.msdyn_resourcecategory);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_rolecompetencyrequirement_Annotations", this.msdyn_rolecompetencyrequirement_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_rolecompetencyrequirement_AsyncOperations", this.msdyn_rolecompetencyrequirement_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_rolecompetencyrequirement_BulkDeleteFailures", this.msdyn_rolecompetencyrequirement_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_rolecompetencyrequirement_DuplicateBaseRecord", this.msdyn_rolecompetencyrequirement_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_rolecompetencyrequirement_DuplicateMatchingRecord", this.msdyn_rolecompetencyrequirement_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_rolecompetencyrequirement_MailboxTrackingFolders", this.msdyn_rolecompetencyrequirement_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_rolecompetencyrequirement_PrincipalObjectAttributeAccesses", this.msdyn_rolecompetencyrequirement_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_rolecompetencyrequirement_ProcessSession", this.msdyn_rolecompetencyrequirement_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_rolecompetencyrequirement_SyncErrors", this.msdyn_rolecompetencyrequirement_SyncErrors);
        writer.writeStringValue("msdyn_rolecompetencyrequirementid", this.msdyn_rolecompetencyrequirementid);
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
