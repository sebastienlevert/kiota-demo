import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_agreementbookingincidentFromDiscriminatorValue} from './createMsdyn_agreementbookingincidentFromDiscriminatorValue';
import {createMsdyn_customerassetFromDiscriminatorValue} from './createMsdyn_customerassetFromDiscriminatorValue';
import {createMsdyn_functionallocationFromDiscriminatorValue} from './createMsdyn_functionallocationFromDiscriminatorValue';
import {createMsdyn_workorderFromDiscriminatorValue} from './createMsdyn_workorderFromDiscriminatorValue';
import {createMsdyn_workorderincidentFromDiscriminatorValue} from './createMsdyn_workorderincidentFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Account, Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Incident, Mailboxtrackingfolder, Msdyn_agreementbookingincident, Msdyn_customerasset, Msdyn_workorder, Msdyn_workorderincident, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_functionallocation extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_parentfunctionallocation_value?: string | undefined;
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
    private _msdyn_address1?: string | undefined;
    private _msdyn_address2?: string | undefined;
    private _msdyn_address3?: string | undefined;
    private _msdyn_addressname?: string | undefined;
    private _msdyn_city?: string | undefined;
    private _msdyn_country?: string | undefined;
    private _msdyn_customerasset_FunctionalLocation_ms?: Msdyn_customerasset[] | undefined;
    private _msdyn_functionallocation_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_functionallocation_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_functionallocation_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_FunctionalLocation_ParentFunctional?: Msdyn_functionallocation[] | undefined;
    private _msdyn_functionallocation_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_functionallocation_ProcessSession?: Processsession[] | undefined;
    private _msdyn_functionallocation_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_functionallocationid?: string | undefined;
    private _msdyn_latitude?: number | undefined;
    private _msdyn_longitude?: number | undefined;
    private _msdyn_msdyn_functionallocation_account?: Account[] | undefined;
    private _msdyn_msdyn_functionallocation_incident_FunctionalLocation?: Incident[] | undefined;
    private _msdyn_msdyn_functionallocation_msdyn_agreementbookingincident_FunctionalLocation?: Msdyn_agreementbookingincident[] | undefined;
    private _msdyn_msdyn_functionallocation_msdyn_workorder_FunctionalLocation?: Msdyn_workorder[] | undefined;
    private _msdyn_msdyn_functionallocation_msdyn_workorderincident_FunctionalLocation?: Msdyn_workorderincident[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_ParentFunctionalLocation?: Msdyn_functionallocation | undefined;
    private _msdyn_postalcode?: string | undefined;
    private _msdyn_sequence?: number | undefined;
    private _msdyn_stateorprovince?: string | undefined;
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
     * Gets the _msdyn_parentfunctionallocation_value property value. 
     * @returns a string
     */
    public get _msdyn_parentfunctionallocation_value() {
        return this.__msdyn_parentfunctionallocation_value;
    };
    /**
     * Sets the _msdyn_parentfunctionallocation_value property value. 
     * @param value Value to set for the _msdyn_parentfunctionallocation_value property.
     */
    public set _msdyn_parentfunctionallocation_value(value: string | undefined) {
        this.__msdyn_parentfunctionallocation_value = value;
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
     * Instantiates a new msdyn_functionallocation and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_functionallocation)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_functionallocation)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_functionallocation)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_functionallocation)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_parentfunctionallocation_value": (o, n) => { (o as unknown as Msdyn_functionallocation)._msdyn_parentfunctionallocation_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_functionallocation)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_functionallocation)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_functionallocation)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_functionallocation)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_functionallocation).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_functionallocation).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_functionallocation).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_functionallocation).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_functionallocation).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_functionallocation).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_functionallocation).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_address1": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_address1 = n.getStringValue(); },
            "msdyn_address2": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_address2 = n.getStringValue(); },
            "msdyn_address3": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_address3 = n.getStringValue(); },
            "msdyn_addressname": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_addressname = n.getStringValue(); },
            "msdyn_city": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_city = n.getStringValue(); },
            "msdyn_country": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_country = n.getStringValue(); },
            "msdyn_customerasset_FunctionalLocation_ms": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_customerasset_FunctionalLocation_ms = n.getCollectionOfObjectValues<Msdyn_customerasset>(createMsdyn_customerassetFromDiscriminatorValue); },
            "msdyn_functionallocation_AsyncOperations": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_functionallocation_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_functionallocation_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_functionallocation_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_functionallocation_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_functionallocation_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_FunctionalLocation_ParentFunctional": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_FunctionalLocation_ParentFunctional = n.getCollectionOfObjectValues<Msdyn_functionallocation>(createMsdyn_functionallocationFromDiscriminatorValue); },
            "msdyn_functionallocation_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_functionallocation_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_functionallocation_ProcessSession": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_functionallocation_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_functionallocation_SyncErrors": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_functionallocation_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_functionallocationid": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_functionallocationid = n.getStringValue(); },
            "msdyn_latitude": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_latitude = n.getNumberValue(); },
            "msdyn_longitude": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_longitude = n.getNumberValue(); },
            "msdyn_msdyn_functionallocation_account": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_msdyn_functionallocation_account = n.getCollectionOfObjectValues<Account>(createAccountFromDiscriminatorValue); },
            "msdyn_msdyn_functionallocation_incident_FunctionalLocation": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_msdyn_functionallocation_incident_FunctionalLocation = n.getCollectionOfObjectValues<Incident>(createIncidentFromDiscriminatorValue); },
            "msdyn_msdyn_functionallocation_msdyn_agreementbookingincident_FunctionalLocation": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_msdyn_functionallocation_msdyn_agreementbookingincident_FunctionalLocation = n.getCollectionOfObjectValues<Msdyn_agreementbookingincident>(createMsdyn_agreementbookingincidentFromDiscriminatorValue); },
            "msdyn_msdyn_functionallocation_msdyn_workorder_FunctionalLocation": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_msdyn_functionallocation_msdyn_workorder_FunctionalLocation = n.getCollectionOfObjectValues<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "msdyn_msdyn_functionallocation_msdyn_workorderincident_FunctionalLocation": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_msdyn_functionallocation_msdyn_workorderincident_FunctionalLocation = n.getCollectionOfObjectValues<Msdyn_workorderincident>(createMsdyn_workorderincidentFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_name = n.getStringValue(); },
            "msdyn_ParentFunctionalLocation": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_ParentFunctionalLocation = n.getObjectValue<Msdyn_functionallocation>(createMsdyn_functionallocationFromDiscriminatorValue); },
            "msdyn_postalcode": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_postalcode = n.getStringValue(); },
            "msdyn_sequence": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_sequence = n.getNumberValue(); },
            "msdyn_stateorprovince": (o, n) => { (o as unknown as Msdyn_functionallocation).msdyn_stateorprovince = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_functionallocation).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_functionallocation).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_functionallocation).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_functionallocation).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_functionallocation).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_functionallocation).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_functionallocation).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_functionallocation).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_functionallocation).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_functionallocation).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_address1 property value. 
     * @returns a string
     */
    public get msdyn_address1() {
        return this._msdyn_address1;
    };
    /**
     * Sets the msdyn_address1 property value. 
     * @param value Value to set for the msdyn_address1 property.
     */
    public set msdyn_address1(value: string | undefined) {
        this._msdyn_address1 = value;
    };
    /**
     * Gets the msdyn_address2 property value. 
     * @returns a string
     */
    public get msdyn_address2() {
        return this._msdyn_address2;
    };
    /**
     * Sets the msdyn_address2 property value. 
     * @param value Value to set for the msdyn_address2 property.
     */
    public set msdyn_address2(value: string | undefined) {
        this._msdyn_address2 = value;
    };
    /**
     * Gets the msdyn_address3 property value. 
     * @returns a string
     */
    public get msdyn_address3() {
        return this._msdyn_address3;
    };
    /**
     * Sets the msdyn_address3 property value. 
     * @param value Value to set for the msdyn_address3 property.
     */
    public set msdyn_address3(value: string | undefined) {
        this._msdyn_address3 = value;
    };
    /**
     * Gets the msdyn_addressname property value. 
     * @returns a string
     */
    public get msdyn_addressname() {
        return this._msdyn_addressname;
    };
    /**
     * Sets the msdyn_addressname property value. 
     * @param value Value to set for the msdyn_addressname property.
     */
    public set msdyn_addressname(value: string | undefined) {
        this._msdyn_addressname = value;
    };
    /**
     * Gets the msdyn_city property value. 
     * @returns a string
     */
    public get msdyn_city() {
        return this._msdyn_city;
    };
    /**
     * Sets the msdyn_city property value. 
     * @param value Value to set for the msdyn_city property.
     */
    public set msdyn_city(value: string | undefined) {
        this._msdyn_city = value;
    };
    /**
     * Gets the msdyn_country property value. 
     * @returns a string
     */
    public get msdyn_country() {
        return this._msdyn_country;
    };
    /**
     * Sets the msdyn_country property value. 
     * @param value Value to set for the msdyn_country property.
     */
    public set msdyn_country(value: string | undefined) {
        this._msdyn_country = value;
    };
    /**
     * Gets the msdyn_customerasset_FunctionalLocation_ms property value. 
     * @returns a msdyn_customerasset
     */
    public get msdyn_customerasset_FunctionalLocation_ms() {
        return this._msdyn_customerasset_FunctionalLocation_ms;
    };
    /**
     * Sets the msdyn_customerasset_FunctionalLocation_ms property value. 
     * @param value Value to set for the msdyn_customerasset_FunctionalLocation_ms property.
     */
    public set msdyn_customerasset_FunctionalLocation_ms(value: Msdyn_customerasset[] | undefined) {
        this._msdyn_customerasset_FunctionalLocation_ms = value;
    };
    /**
     * Gets the msdyn_functionallocation_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_functionallocation_AsyncOperations() {
        return this._msdyn_functionallocation_AsyncOperations;
    };
    /**
     * Sets the msdyn_functionallocation_AsyncOperations property value. 
     * @param value Value to set for the msdyn_functionallocation_AsyncOperations property.
     */
    public set msdyn_functionallocation_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_functionallocation_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_functionallocation_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_functionallocation_BulkDeleteFailures() {
        return this._msdyn_functionallocation_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_functionallocation_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_functionallocation_BulkDeleteFailures property.
     */
    public set msdyn_functionallocation_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_functionallocation_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_functionallocation_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_functionallocation_MailboxTrackingFolders() {
        return this._msdyn_functionallocation_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_functionallocation_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_functionallocation_MailboxTrackingFolders property.
     */
    public set msdyn_functionallocation_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_functionallocation_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_FunctionalLocation_ParentFunctional property value. 
     * @returns a msdyn_functionallocation
     */
    public get msdyn_FunctionalLocation_ParentFunctional() {
        return this._msdyn_FunctionalLocation_ParentFunctional;
    };
    /**
     * Sets the msdyn_FunctionalLocation_ParentFunctional property value. 
     * @param value Value to set for the msdyn_FunctionalLocation_ParentFunctional property.
     */
    public set msdyn_FunctionalLocation_ParentFunctional(value: Msdyn_functionallocation[] | undefined) {
        this._msdyn_FunctionalLocation_ParentFunctional = value;
    };
    /**
     * Gets the msdyn_functionallocation_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_functionallocation_PrincipalObjectAttributeAccesses() {
        return this._msdyn_functionallocation_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_functionallocation_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_functionallocation_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_functionallocation_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_functionallocation_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_functionallocation_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_functionallocation_ProcessSession() {
        return this._msdyn_functionallocation_ProcessSession;
    };
    /**
     * Sets the msdyn_functionallocation_ProcessSession property value. 
     * @param value Value to set for the msdyn_functionallocation_ProcessSession property.
     */
    public set msdyn_functionallocation_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_functionallocation_ProcessSession = value;
    };
    /**
     * Gets the msdyn_functionallocation_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_functionallocation_SyncErrors() {
        return this._msdyn_functionallocation_SyncErrors;
    };
    /**
     * Sets the msdyn_functionallocation_SyncErrors property value. 
     * @param value Value to set for the msdyn_functionallocation_SyncErrors property.
     */
    public set msdyn_functionallocation_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_functionallocation_SyncErrors = value;
    };
    /**
     * Gets the msdyn_functionallocationid property value. 
     * @returns a string
     */
    public get msdyn_functionallocationid() {
        return this._msdyn_functionallocationid;
    };
    /**
     * Sets the msdyn_functionallocationid property value. 
     * @param value Value to set for the msdyn_functionallocationid property.
     */
    public set msdyn_functionallocationid(value: string | undefined) {
        this._msdyn_functionallocationid = value;
    };
    /**
     * Gets the msdyn_latitude property value. 
     * @returns a double
     */
    public get msdyn_latitude() {
        return this._msdyn_latitude;
    };
    /**
     * Sets the msdyn_latitude property value. 
     * @param value Value to set for the msdyn_latitude property.
     */
    public set msdyn_latitude(value: number | undefined) {
        this._msdyn_latitude = value;
    };
    /**
     * Gets the msdyn_longitude property value. 
     * @returns a double
     */
    public get msdyn_longitude() {
        return this._msdyn_longitude;
    };
    /**
     * Sets the msdyn_longitude property value. 
     * @param value Value to set for the msdyn_longitude property.
     */
    public set msdyn_longitude(value: number | undefined) {
        this._msdyn_longitude = value;
    };
    /**
     * Gets the msdyn_msdyn_functionallocation_account property value. 
     * @returns a account
     */
    public get msdyn_msdyn_functionallocation_account() {
        return this._msdyn_msdyn_functionallocation_account;
    };
    /**
     * Sets the msdyn_msdyn_functionallocation_account property value. 
     * @param value Value to set for the msdyn_msdyn_functionallocation_account property.
     */
    public set msdyn_msdyn_functionallocation_account(value: Account[] | undefined) {
        this._msdyn_msdyn_functionallocation_account = value;
    };
    /**
     * Gets the msdyn_msdyn_functionallocation_incident_FunctionalLocation property value. 
     * @returns a incident
     */
    public get msdyn_msdyn_functionallocation_incident_FunctionalLocation() {
        return this._msdyn_msdyn_functionallocation_incident_FunctionalLocation;
    };
    /**
     * Sets the msdyn_msdyn_functionallocation_incident_FunctionalLocation property value. 
     * @param value Value to set for the msdyn_msdyn_functionallocation_incident_FunctionalLocation property.
     */
    public set msdyn_msdyn_functionallocation_incident_FunctionalLocation(value: Incident[] | undefined) {
        this._msdyn_msdyn_functionallocation_incident_FunctionalLocation = value;
    };
    /**
     * Gets the msdyn_msdyn_functionallocation_msdyn_agreementbookingincident_FunctionalLocation property value. 
     * @returns a msdyn_agreementbookingincident
     */
    public get msdyn_msdyn_functionallocation_msdyn_agreementbookingincident_FunctionalLocation() {
        return this._msdyn_msdyn_functionallocation_msdyn_agreementbookingincident_FunctionalLocation;
    };
    /**
     * Sets the msdyn_msdyn_functionallocation_msdyn_agreementbookingincident_FunctionalLocation property value. 
     * @param value Value to set for the msdyn_msdyn_functionallocation_msdyn_agreementbookingincident_FunctionalLocation property.
     */
    public set msdyn_msdyn_functionallocation_msdyn_agreementbookingincident_FunctionalLocation(value: Msdyn_agreementbookingincident[] | undefined) {
        this._msdyn_msdyn_functionallocation_msdyn_agreementbookingincident_FunctionalLocation = value;
    };
    /**
     * Gets the msdyn_msdyn_functionallocation_msdyn_workorder_FunctionalLocation property value. 
     * @returns a msdyn_workorder
     */
    public get msdyn_msdyn_functionallocation_msdyn_workorder_FunctionalLocation() {
        return this._msdyn_msdyn_functionallocation_msdyn_workorder_FunctionalLocation;
    };
    /**
     * Sets the msdyn_msdyn_functionallocation_msdyn_workorder_FunctionalLocation property value. 
     * @param value Value to set for the msdyn_msdyn_functionallocation_msdyn_workorder_FunctionalLocation property.
     */
    public set msdyn_msdyn_functionallocation_msdyn_workorder_FunctionalLocation(value: Msdyn_workorder[] | undefined) {
        this._msdyn_msdyn_functionallocation_msdyn_workorder_FunctionalLocation = value;
    };
    /**
     * Gets the msdyn_msdyn_functionallocation_msdyn_workorderincident_FunctionalLocation property value. 
     * @returns a msdyn_workorderincident
     */
    public get msdyn_msdyn_functionallocation_msdyn_workorderincident_FunctionalLocation() {
        return this._msdyn_msdyn_functionallocation_msdyn_workorderincident_FunctionalLocation;
    };
    /**
     * Sets the msdyn_msdyn_functionallocation_msdyn_workorderincident_FunctionalLocation property value. 
     * @param value Value to set for the msdyn_msdyn_functionallocation_msdyn_workorderincident_FunctionalLocation property.
     */
    public set msdyn_msdyn_functionallocation_msdyn_workorderincident_FunctionalLocation(value: Msdyn_workorderincident[] | undefined) {
        this._msdyn_msdyn_functionallocation_msdyn_workorderincident_FunctionalLocation = value;
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
     * Gets the msdyn_ParentFunctionalLocation property value. 
     * @returns a msdyn_functionallocation
     */
    public get msdyn_ParentFunctionalLocation() {
        return this._msdyn_ParentFunctionalLocation;
    };
    /**
     * Sets the msdyn_ParentFunctionalLocation property value. 
     * @param value Value to set for the msdyn_ParentFunctionalLocation property.
     */
    public set msdyn_ParentFunctionalLocation(value: Msdyn_functionallocation | undefined) {
        this._msdyn_ParentFunctionalLocation = value;
    };
    /**
     * Gets the msdyn_postalcode property value. 
     * @returns a string
     */
    public get msdyn_postalcode() {
        return this._msdyn_postalcode;
    };
    /**
     * Sets the msdyn_postalcode property value. 
     * @param value Value to set for the msdyn_postalcode property.
     */
    public set msdyn_postalcode(value: string | undefined) {
        this._msdyn_postalcode = value;
    };
    /**
     * Gets the msdyn_sequence property value. 
     * @returns a integer
     */
    public get msdyn_sequence() {
        return this._msdyn_sequence;
    };
    /**
     * Sets the msdyn_sequence property value. 
     * @param value Value to set for the msdyn_sequence property.
     */
    public set msdyn_sequence(value: number | undefined) {
        this._msdyn_sequence = value;
    };
    /**
     * Gets the msdyn_stateorprovince property value. 
     * @returns a string
     */
    public get msdyn_stateorprovince() {
        return this._msdyn_stateorprovince;
    };
    /**
     * Sets the msdyn_stateorprovince property value. 
     * @param value Value to set for the msdyn_stateorprovince property.
     */
    public set msdyn_stateorprovince(value: string | undefined) {
        this._msdyn_stateorprovince = value;
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
        writer.writeStringValue("_msdyn_parentfunctionallocation_value", this._msdyn_parentfunctionallocation_value);
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
        writer.writeStringValue("msdyn_address1", this.msdyn_address1);
        writer.writeStringValue("msdyn_address2", this.msdyn_address2);
        writer.writeStringValue("msdyn_address3", this.msdyn_address3);
        writer.writeStringValue("msdyn_addressname", this.msdyn_addressname);
        writer.writeStringValue("msdyn_city", this.msdyn_city);
        writer.writeStringValue("msdyn_country", this.msdyn_country);
        writer.writeCollectionOfObjectValues<Msdyn_customerasset>("msdyn_customerasset_FunctionalLocation_ms", this.msdyn_customerasset_FunctionalLocation_ms);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_functionallocation_AsyncOperations", this.msdyn_functionallocation_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_functionallocation_BulkDeleteFailures", this.msdyn_functionallocation_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_functionallocation_MailboxTrackingFolders", this.msdyn_functionallocation_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_functionallocation>("msdyn_FunctionalLocation_ParentFunctional", this.msdyn_FunctionalLocation_ParentFunctional);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_functionallocation_PrincipalObjectAttributeAccesses", this.msdyn_functionallocation_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_functionallocation_ProcessSession", this.msdyn_functionallocation_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_functionallocation_SyncErrors", this.msdyn_functionallocation_SyncErrors);
        writer.writeStringValue("msdyn_functionallocationid", this.msdyn_functionallocationid);
        writer.writeNumberValue("msdyn_latitude", this.msdyn_latitude);
        writer.writeNumberValue("msdyn_longitude", this.msdyn_longitude);
        writer.writeCollectionOfObjectValues<Account>("msdyn_msdyn_functionallocation_account", this.msdyn_msdyn_functionallocation_account);
        writer.writeCollectionOfObjectValues<Incident>("msdyn_msdyn_functionallocation_incident_FunctionalLocation", this.msdyn_msdyn_functionallocation_incident_FunctionalLocation);
        writer.writeCollectionOfObjectValues<Msdyn_agreementbookingincident>("msdyn_msdyn_functionallocation_msdyn_agreementbookingincident_FunctionalLocation", this.msdyn_msdyn_functionallocation_msdyn_agreementbookingincident_FunctionalLocation);
        writer.writeCollectionOfObjectValues<Msdyn_workorder>("msdyn_msdyn_functionallocation_msdyn_workorder_FunctionalLocation", this.msdyn_msdyn_functionallocation_msdyn_workorder_FunctionalLocation);
        writer.writeCollectionOfObjectValues<Msdyn_workorderincident>("msdyn_msdyn_functionallocation_msdyn_workorderincident_FunctionalLocation", this.msdyn_msdyn_functionallocation_msdyn_workorderincident_FunctionalLocation);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Msdyn_functionallocation>("msdyn_ParentFunctionalLocation", this.msdyn_ParentFunctionalLocation);
        writer.writeStringValue("msdyn_postalcode", this.msdyn_postalcode);
        writer.writeNumberValue("msdyn_sequence", this.msdyn_sequence);
        writer.writeStringValue("msdyn_stateorprovince", this.msdyn_stateorprovince);
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
