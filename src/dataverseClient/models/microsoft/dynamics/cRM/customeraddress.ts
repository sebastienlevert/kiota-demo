import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createContractdetailFromDiscriminatorValue} from './createContractdetailFromDiscriminatorValue';
import {createContractFromDiscriminatorValue} from './createContractFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Account, Asyncoperation, Bulkdeletefailure, Contact, Contract, Contractdetail, Crmbaseentity, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Customeraddress extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __parentid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _addressnumber?: number | undefined;
    private _addresstypecode?: number | undefined;
    private _city?: string | undefined;
    private _composite?: string | undefined;
    private _country?: string | undefined;
    private _county?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _customer_address_contract_line_items?: Contractdetail[] | undefined;
    private _customer_address_contracts_as_billing_address?: Contract[] | undefined;
    private _customer_address_contracts_as_service_address?: Contract[] | undefined;
    private _customerAddress_AsyncOperations?: Asyncoperation[] | undefined;
    private _customerAddress_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _customeraddress_principalobjectattributeaccess?: Principalobjectattributeaccess[] | undefined;
    private _customerAddress_ProcessSessions?: Processsession[] | undefined;
    private _customerAddress_SyncErrors?: Syncerror[] | undefined;
    private _customeraddressid?: string | undefined;
    private _exchangerate?: number | undefined;
    private _fax?: string | undefined;
    private _freighttermscode?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _latitude?: number | undefined;
    private _line1?: string | undefined;
    private _line2?: string | undefined;
    private _line3?: string | undefined;
    private _longitude?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _objecttypecode?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _parentid_account?: Account | undefined;
    private _parentid_contact?: Contact | undefined;
    private _postalcode?: string | undefined;
    private _postofficebox?: string | undefined;
    private _primarycontactname?: string | undefined;
    private _shippingmethodcode?: number | undefined;
    private _stateorprovince?: string | undefined;
    private _telephone1?: string | undefined;
    private _telephone2?: string | undefined;
    private _telephone3?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _upszone?: string | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _utcoffset?: number | undefined;
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
     * Gets the _parentid_value property value. 
     * @returns a string
     */
    public get _parentid_value() {
        return this.__parentid_value;
    };
    /**
     * Sets the _parentid_value property value. 
     * @param value Value to set for the _parentid_value property.
     */
    public set _parentid_value(value: string | undefined) {
        this.__parentid_value = value;
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
     * Gets the addressnumber property value. 
     * @returns a integer
     */
    public get addressnumber() {
        return this._addressnumber;
    };
    /**
     * Sets the addressnumber property value. 
     * @param value Value to set for the addressnumber property.
     */
    public set addressnumber(value: number | undefined) {
        this._addressnumber = value;
    };
    /**
     * Gets the addresstypecode property value. 
     * @returns a integer
     */
    public get addresstypecode() {
        return this._addresstypecode;
    };
    /**
     * Sets the addresstypecode property value. 
     * @param value Value to set for the addresstypecode property.
     */
    public set addresstypecode(value: number | undefined) {
        this._addresstypecode = value;
    };
    /**
     * Gets the city property value. 
     * @returns a string
     */
    public get city() {
        return this._city;
    };
    /**
     * Sets the city property value. 
     * @param value Value to set for the city property.
     */
    public set city(value: string | undefined) {
        this._city = value;
    };
    /**
     * Gets the composite property value. 
     * @returns a string
     */
    public get composite() {
        return this._composite;
    };
    /**
     * Sets the composite property value. 
     * @param value Value to set for the composite property.
     */
    public set composite(value: string | undefined) {
        this._composite = value;
    };
    /**
     * Instantiates a new customeraddress and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the country property value. 
     * @returns a string
     */
    public get country() {
        return this._country;
    };
    /**
     * Sets the country property value. 
     * @param value Value to set for the country property.
     */
    public set country(value: string | undefined) {
        this._country = value;
    };
    /**
     * Gets the county property value. 
     * @returns a string
     */
    public get county() {
        return this._county;
    };
    /**
     * Sets the county property value. 
     * @param value Value to set for the county property.
     */
    public set county(value: string | undefined) {
        this._county = value;
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
     * Gets the customer_address_contract_line_items property value. 
     * @returns a contractdetail
     */
    public get customer_address_contract_line_items() {
        return this._customer_address_contract_line_items;
    };
    /**
     * Sets the customer_address_contract_line_items property value. 
     * @param value Value to set for the customer_address_contract_line_items property.
     */
    public set customer_address_contract_line_items(value: Contractdetail[] | undefined) {
        this._customer_address_contract_line_items = value;
    };
    /**
     * Gets the customer_address_contracts_as_billing_address property value. 
     * @returns a contract
     */
    public get customer_address_contracts_as_billing_address() {
        return this._customer_address_contracts_as_billing_address;
    };
    /**
     * Sets the customer_address_contracts_as_billing_address property value. 
     * @param value Value to set for the customer_address_contracts_as_billing_address property.
     */
    public set customer_address_contracts_as_billing_address(value: Contract[] | undefined) {
        this._customer_address_contracts_as_billing_address = value;
    };
    /**
     * Gets the customer_address_contracts_as_service_address property value. 
     * @returns a contract
     */
    public get customer_address_contracts_as_service_address() {
        return this._customer_address_contracts_as_service_address;
    };
    /**
     * Sets the customer_address_contracts_as_service_address property value. 
     * @param value Value to set for the customer_address_contracts_as_service_address property.
     */
    public set customer_address_contracts_as_service_address(value: Contract[] | undefined) {
        this._customer_address_contracts_as_service_address = value;
    };
    /**
     * Gets the customerAddress_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get customerAddress_AsyncOperations() {
        return this._customerAddress_AsyncOperations;
    };
    /**
     * Sets the customerAddress_AsyncOperations property value. 
     * @param value Value to set for the CustomerAddress_AsyncOperations property.
     */
    public set customerAddress_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._customerAddress_AsyncOperations = value;
    };
    /**
     * Gets the customerAddress_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get customerAddress_BulkDeleteFailures() {
        return this._customerAddress_BulkDeleteFailures;
    };
    /**
     * Sets the customerAddress_BulkDeleteFailures property value. 
     * @param value Value to set for the CustomerAddress_BulkDeleteFailures property.
     */
    public set customerAddress_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._customerAddress_BulkDeleteFailures = value;
    };
    /**
     * Gets the customeraddress_principalobjectattributeaccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get customeraddress_principalobjectattributeaccess() {
        return this._customeraddress_principalobjectattributeaccess;
    };
    /**
     * Sets the customeraddress_principalobjectattributeaccess property value. 
     * @param value Value to set for the customeraddress_principalobjectattributeaccess property.
     */
    public set customeraddress_principalobjectattributeaccess(value: Principalobjectattributeaccess[] | undefined) {
        this._customeraddress_principalobjectattributeaccess = value;
    };
    /**
     * Gets the customerAddress_ProcessSessions property value. 
     * @returns a processsession
     */
    public get customerAddress_ProcessSessions() {
        return this._customerAddress_ProcessSessions;
    };
    /**
     * Sets the customerAddress_ProcessSessions property value. 
     * @param value Value to set for the CustomerAddress_ProcessSessions property.
     */
    public set customerAddress_ProcessSessions(value: Processsession[] | undefined) {
        this._customerAddress_ProcessSessions = value;
    };
    /**
     * Gets the customerAddress_SyncErrors property value. 
     * @returns a syncerror
     */
    public get customerAddress_SyncErrors() {
        return this._customerAddress_SyncErrors;
    };
    /**
     * Sets the customerAddress_SyncErrors property value. 
     * @param value Value to set for the CustomerAddress_SyncErrors property.
     */
    public set customerAddress_SyncErrors(value: Syncerror[] | undefined) {
        this._customerAddress_SyncErrors = value;
    };
    /**
     * Gets the customeraddressid property value. 
     * @returns a string
     */
    public get customeraddressid() {
        return this._customeraddressid;
    };
    /**
     * Sets the customeraddressid property value. 
     * @param value Value to set for the customeraddressid property.
     */
    public set customeraddressid(value: string | undefined) {
        this._customeraddressid = value;
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
     * Gets the fax property value. 
     * @returns a string
     */
    public get fax() {
        return this._fax;
    };
    /**
     * Sets the fax property value. 
     * @param value Value to set for the fax property.
     */
    public set fax(value: string | undefined) {
        this._fax = value;
    };
    /**
     * Gets the freighttermscode property value. 
     * @returns a integer
     */
    public get freighttermscode() {
        return this._freighttermscode;
    };
    /**
     * Sets the freighttermscode property value. 
     * @param value Value to set for the freighttermscode property.
     */
    public set freighttermscode(value: number | undefined) {
        this._freighttermscode = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Customeraddress)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Customeraddress)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Customeraddress)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Customeraddress)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Customeraddress)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Customeraddress)._owningbusinessunit_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Customeraddress)._owninguser_value = n.getStringValue(); },
            "_parentid_value": (o, n) => { (o as unknown as Customeraddress)._parentid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Customeraddress)._transactioncurrencyid_value = n.getStringValue(); },
            "addressnumber": (o, n) => { (o as unknown as Customeraddress).addressnumber = n.getNumberValue(); },
            "addresstypecode": (o, n) => { (o as unknown as Customeraddress).addresstypecode = n.getNumberValue(); },
            "city": (o, n) => { (o as unknown as Customeraddress).city = n.getStringValue(); },
            "composite": (o, n) => { (o as unknown as Customeraddress).composite = n.getStringValue(); },
            "country": (o, n) => { (o as unknown as Customeraddress).country = n.getStringValue(); },
            "county": (o, n) => { (o as unknown as Customeraddress).county = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Customeraddress).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Customeraddress).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Customeraddress).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "customer_address_contract_line_items": (o, n) => { (o as unknown as Customeraddress).customer_address_contract_line_items = n.getCollectionOfObjectValues<Contractdetail>(createContractdetailFromDiscriminatorValue); },
            "customer_address_contracts_as_billing_address": (o, n) => { (o as unknown as Customeraddress).customer_address_contracts_as_billing_address = n.getCollectionOfObjectValues<Contract>(createContractFromDiscriminatorValue); },
            "customer_address_contracts_as_service_address": (o, n) => { (o as unknown as Customeraddress).customer_address_contracts_as_service_address = n.getCollectionOfObjectValues<Contract>(createContractFromDiscriminatorValue); },
            "customerAddress_AsyncOperations": (o, n) => { (o as unknown as Customeraddress).customerAddress_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "customerAddress_BulkDeleteFailures": (o, n) => { (o as unknown as Customeraddress).customerAddress_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "customeraddress_principalobjectattributeaccess": (o, n) => { (o as unknown as Customeraddress).customeraddress_principalobjectattributeaccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "customerAddress_ProcessSessions": (o, n) => { (o as unknown as Customeraddress).customerAddress_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "customerAddress_SyncErrors": (o, n) => { (o as unknown as Customeraddress).customerAddress_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "customeraddressid": (o, n) => { (o as unknown as Customeraddress).customeraddressid = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Customeraddress).exchangerate = n.getNumberValue(); },
            "fax": (o, n) => { (o as unknown as Customeraddress).fax = n.getStringValue(); },
            "freighttermscode": (o, n) => { (o as unknown as Customeraddress).freighttermscode = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Customeraddress).importsequencenumber = n.getNumberValue(); },
            "latitude": (o, n) => { (o as unknown as Customeraddress).latitude = n.getNumberValue(); },
            "line1": (o, n) => { (o as unknown as Customeraddress).line1 = n.getStringValue(); },
            "line2": (o, n) => { (o as unknown as Customeraddress).line2 = n.getStringValue(); },
            "line3": (o, n) => { (o as unknown as Customeraddress).line3 = n.getStringValue(); },
            "longitude": (o, n) => { (o as unknown as Customeraddress).longitude = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Customeraddress).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Customeraddress).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Customeraddress).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Customeraddress).name = n.getStringValue(); },
            "objecttypecode": (o, n) => { (o as unknown as Customeraddress).objecttypecode = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Customeraddress).overriddencreatedon = n.getDateValue(); },
            "parentid_account": (o, n) => { (o as unknown as Customeraddress).parentid_account = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "parentid_contact": (o, n) => { (o as unknown as Customeraddress).parentid_contact = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "postalcode": (o, n) => { (o as unknown as Customeraddress).postalcode = n.getStringValue(); },
            "postofficebox": (o, n) => { (o as unknown as Customeraddress).postofficebox = n.getStringValue(); },
            "primarycontactname": (o, n) => { (o as unknown as Customeraddress).primarycontactname = n.getStringValue(); },
            "shippingmethodcode": (o, n) => { (o as unknown as Customeraddress).shippingmethodcode = n.getNumberValue(); },
            "stateorprovince": (o, n) => { (o as unknown as Customeraddress).stateorprovince = n.getStringValue(); },
            "telephone1": (o, n) => { (o as unknown as Customeraddress).telephone1 = n.getStringValue(); },
            "telephone2": (o, n) => { (o as unknown as Customeraddress).telephone2 = n.getStringValue(); },
            "telephone3": (o, n) => { (o as unknown as Customeraddress).telephone3 = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Customeraddress).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Customeraddress).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "upszone": (o, n) => { (o as unknown as Customeraddress).upszone = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Customeraddress).utcconversiontimezonecode = n.getNumberValue(); },
            "utcoffset": (o, n) => { (o as unknown as Customeraddress).utcoffset = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Customeraddress).versionnumber = n.getNumberValue(); },
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
     * Gets the latitude property value. 
     * @returns a double
     */
    public get latitude() {
        return this._latitude;
    };
    /**
     * Sets the latitude property value. 
     * @param value Value to set for the latitude property.
     */
    public set latitude(value: number | undefined) {
        this._latitude = value;
    };
    /**
     * Gets the line1 property value. 
     * @returns a string
     */
    public get line1() {
        return this._line1;
    };
    /**
     * Sets the line1 property value. 
     * @param value Value to set for the line1 property.
     */
    public set line1(value: string | undefined) {
        this._line1 = value;
    };
    /**
     * Gets the line2 property value. 
     * @returns a string
     */
    public get line2() {
        return this._line2;
    };
    /**
     * Sets the line2 property value. 
     * @param value Value to set for the line2 property.
     */
    public set line2(value: string | undefined) {
        this._line2 = value;
    };
    /**
     * Gets the line3 property value. 
     * @returns a string
     */
    public get line3() {
        return this._line3;
    };
    /**
     * Sets the line3 property value. 
     * @param value Value to set for the line3 property.
     */
    public set line3(value: string | undefined) {
        this._line3 = value;
    };
    /**
     * Gets the longitude property value. 
     * @returns a double
     */
    public get longitude() {
        return this._longitude;
    };
    /**
     * Sets the longitude property value. 
     * @param value Value to set for the longitude property.
     */
    public set longitude(value: number | undefined) {
        this._longitude = value;
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
     * Gets the objecttypecode property value. 
     * @returns a string
     */
    public get objecttypecode() {
        return this._objecttypecode;
    };
    /**
     * Sets the objecttypecode property value. 
     * @param value Value to set for the objecttypecode property.
     */
    public set objecttypecode(value: string | undefined) {
        this._objecttypecode = value;
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
     * Gets the parentid_account property value. 
     * @returns a account
     */
    public get parentid_account() {
        return this._parentid_account;
    };
    /**
     * Sets the parentid_account property value. 
     * @param value Value to set for the parentid_account property.
     */
    public set parentid_account(value: Account | undefined) {
        this._parentid_account = value;
    };
    /**
     * Gets the parentid_contact property value. 
     * @returns a contact
     */
    public get parentid_contact() {
        return this._parentid_contact;
    };
    /**
     * Sets the parentid_contact property value. 
     * @param value Value to set for the parentid_contact property.
     */
    public set parentid_contact(value: Contact | undefined) {
        this._parentid_contact = value;
    };
    /**
     * Gets the postalcode property value. 
     * @returns a string
     */
    public get postalcode() {
        return this._postalcode;
    };
    /**
     * Sets the postalcode property value. 
     * @param value Value to set for the postalcode property.
     */
    public set postalcode(value: string | undefined) {
        this._postalcode = value;
    };
    /**
     * Gets the postofficebox property value. 
     * @returns a string
     */
    public get postofficebox() {
        return this._postofficebox;
    };
    /**
     * Sets the postofficebox property value. 
     * @param value Value to set for the postofficebox property.
     */
    public set postofficebox(value: string | undefined) {
        this._postofficebox = value;
    };
    /**
     * Gets the primarycontactname property value. 
     * @returns a string
     */
    public get primarycontactname() {
        return this._primarycontactname;
    };
    /**
     * Sets the primarycontactname property value. 
     * @param value Value to set for the primarycontactname property.
     */
    public set primarycontactname(value: string | undefined) {
        this._primarycontactname = value;
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
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_parentid_value", this._parentid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeNumberValue("addressnumber", this.addressnumber);
        writer.writeNumberValue("addresstypecode", this.addresstypecode);
        writer.writeStringValue("city", this.city);
        writer.writeStringValue("composite", this.composite);
        writer.writeStringValue("country", this.country);
        writer.writeStringValue("county", this.county);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeCollectionOfObjectValues<Contractdetail>("customer_address_contract_line_items", this.customer_address_contract_line_items);
        writer.writeCollectionOfObjectValues<Contract>("customer_address_contracts_as_billing_address", this.customer_address_contracts_as_billing_address);
        writer.writeCollectionOfObjectValues<Contract>("customer_address_contracts_as_service_address", this.customer_address_contracts_as_service_address);
        writer.writeCollectionOfObjectValues<Asyncoperation>("customerAddress_AsyncOperations", this.customerAddress_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("customerAddress_BulkDeleteFailures", this.customerAddress_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("customeraddress_principalobjectattributeaccess", this.customeraddress_principalobjectattributeaccess);
        writer.writeCollectionOfObjectValues<Processsession>("customerAddress_ProcessSessions", this.customerAddress_ProcessSessions);
        writer.writeCollectionOfObjectValues<Syncerror>("customerAddress_SyncErrors", this.customerAddress_SyncErrors);
        writer.writeStringValue("customeraddressid", this.customeraddressid);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeStringValue("fax", this.fax);
        writer.writeNumberValue("freighttermscode", this.freighttermscode);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeNumberValue("latitude", this.latitude);
        writer.writeStringValue("line1", this.line1);
        writer.writeStringValue("line2", this.line2);
        writer.writeStringValue("line3", this.line3);
        writer.writeNumberValue("longitude", this.longitude);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("objecttypecode", this.objecttypecode);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Account>("parentid_account", this.parentid_account);
        writer.writeObjectValue<Contact>("parentid_contact", this.parentid_contact);
        writer.writeStringValue("postalcode", this.postalcode);
        writer.writeStringValue("postofficebox", this.postofficebox);
        writer.writeStringValue("primarycontactname", this.primarycontactname);
        writer.writeNumberValue("shippingmethodcode", this.shippingmethodcode);
        writer.writeStringValue("stateorprovince", this.stateorprovince);
        writer.writeStringValue("telephone1", this.telephone1);
        writer.writeStringValue("telephone2", this.telephone2);
        writer.writeStringValue("telephone3", this.telephone3);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeStringValue("upszone", this.upszone);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("utcoffset", this.utcoffset);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the shippingmethodcode property value. 
     * @returns a integer
     */
    public get shippingmethodcode() {
        return this._shippingmethodcode;
    };
    /**
     * Sets the shippingmethodcode property value. 
     * @param value Value to set for the shippingmethodcode property.
     */
    public set shippingmethodcode(value: number | undefined) {
        this._shippingmethodcode = value;
    };
    /**
     * Gets the stateorprovince property value. 
     * @returns a string
     */
    public get stateorprovince() {
        return this._stateorprovince;
    };
    /**
     * Sets the stateorprovince property value. 
     * @param value Value to set for the stateorprovince property.
     */
    public set stateorprovince(value: string | undefined) {
        this._stateorprovince = value;
    };
    /**
     * Gets the telephone1 property value. 
     * @returns a string
     */
    public get telephone1() {
        return this._telephone1;
    };
    /**
     * Sets the telephone1 property value. 
     * @param value Value to set for the telephone1 property.
     */
    public set telephone1(value: string | undefined) {
        this._telephone1 = value;
    };
    /**
     * Gets the telephone2 property value. 
     * @returns a string
     */
    public get telephone2() {
        return this._telephone2;
    };
    /**
     * Sets the telephone2 property value. 
     * @param value Value to set for the telephone2 property.
     */
    public set telephone2(value: string | undefined) {
        this._telephone2 = value;
    };
    /**
     * Gets the telephone3 property value. 
     * @returns a string
     */
    public get telephone3() {
        return this._telephone3;
    };
    /**
     * Sets the telephone3 property value. 
     * @param value Value to set for the telephone3 property.
     */
    public set telephone3(value: string | undefined) {
        this._telephone3 = value;
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
     * Gets the upszone property value. 
     * @returns a string
     */
    public get upszone() {
        return this._upszone;
    };
    /**
     * Sets the upszone property value. 
     * @param value Value to set for the upszone property.
     */
    public set upszone(value: string | undefined) {
        this._upszone = value;
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
     * Gets the utcoffset property value. 
     * @returns a integer
     */
    public get utcoffset() {
        return this._utcoffset;
    };
    /**
     * Sets the utcoffset property value. 
     * @param value Value to set for the utcoffset property.
     */
    public set utcoffset(value: number | undefined) {
        this._utcoffset = value;
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
